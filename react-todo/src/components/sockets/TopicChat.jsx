import { useEffect, useRef, useState } from "react";
import { joinTopic, loadAllTopics, makeTopic } from "../../http/topicHttp";
import { connect, disconnect, sendMessage, stompClient } from "./stompHandler";

export default function TopicChat({ userInfo }) {
  const [joinTopic, setJoinTopic] = useState();
  const [messages, setMessages] = new useState([]);
  const [connected, setConnected] = useState(false);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    (async () => {
      const topics = await loadAllTopics();
      setTopicList(topics);
    })();
    connect(setConnected, setTopicList);
    return () => {
      disconnect(setConnected);
    };
  }, []);

  const joinTopicHandler = (topic) => {
    setJoinTopic(topic);
    setMessages(topic?.latestMessages);
  };

  const receiveMessageHandler = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div>
      {!joinTopic && (
        <TopicList
          connected={connected}
          topicList={topicList}
          userInfo={userInfo}
          onJoinTopic={joinTopicHandler}
          onMessage={receiveMessageHandler}
        />
      )}
      {joinTopic && (
        <Messages
          topic={joinTopic}
          messages={messages}
          userInfo={userInfo}
          onLeave={joinTopicHandler}
        />
      )}
    </div>
  );
}

function TopicList({ connected, topicList, userInfo, onJoinTopic, onMessage }) {
  const newTopicRef = useRef();

  const makeTopicHandler = () => {
    const newTopicName = newTopicRef.current.value;
    makeTopic(newTopicName);
  };

  const joinTopicHandler = async (topicId) => {
    const topic = await joinTopic(topicId);

    if (topic) {
      if (connected) {
        onJoinTopic(topic);

        stompClient.subscribe(
          `/sub/topic/${topic.topicId}`,
          (message) => {
            const newMessage = JSON.parse(message.body);
            onMessage(newMessage);
          },
          { id: `topic_${topicId}` }
        );
        sendMessage(topicId, "/pub/message", "접속했습니다.", userInfo);
      }
    }
  };

  return (
    <>
      <ul>
        {topicList.map((topic) => (
          <li
            key={topic.topicId}
            onClick={joinTopicHandler.bind(this, topic.topicId)}
          >
            {topic.topicId} : {topic.topicName}
          </li>
        ))}
      </ul>
      <input type="text" ref={newTopicRef} />
      <button onClick={makeTopicHandler}>새로 만들기</button>
    </>
  );
}

function Messages({ topic, messages, userInfo, onLeave }) {
  const inputRef = useRef();

  const inputHandler = (event) => {
    if (event.keyCode === 13) {
      // send
      sendMessage(
        topic.topicId,
        "/pub/message",
        inputRef.current.value,
        userInfo
      );
      inputRef.current.value = "";
    }
  };

  const leaveTopicHandler = () => {
    sendMessage(
      topic.topicId,
      "/pub/message",
      "대화를 종료했습니다.",
      userInfo
    );
    stompClient.unsubscribe(`topic_${topic.topicId}`);
    onLeave(undefined);
  };

  return (
    <>
      <div>{topic.topicName}</div>
      <div>
        {messages.map((msg) => (
          <div key={msg.messageId}>
            {msg.name}({msg.email})|{msg.message}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} onKeyUp={inputHandler} />
      <button onClick={leaveTopicHandler}>나가기</button>
    </>
  );
}

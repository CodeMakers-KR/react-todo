import { useEffect, useRef, useState } from "react";
import { joinTopic, loadAllTopics, makeTopic } from "../../http/topicHttp";
import { connect, disconnect, sendMessage, stompClient } from "./stompHandler";

export default function PopupChat({ userInfo }) {
  const [connected, setConnected] = useState(false);
  const [topicList, setTopicList] = useState([]);

  const chatPopup = useRef();

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
    chatPopup.messageEvent = (event) => {
      const eventData = event.data;
      if (eventData.type === "loaded") {
        chatPopup.current.postMessage(
          { event: "chat", type: "init", data: topic },
          "*"
        );
      } else if (eventData.type === "send") {
        const { topicId, value } = eventData;
        sendMessage(topicId, "/pub/message", value, userInfo);
      } else if (eventData.type === "leave") {
        const { topicId } = eventData;
        sendMessage(topicId, "/pub/message", "대화를 종료했습니다.", userInfo);
        stompClient.unsubscribe(`topic_${topicId}`);
        chatPopup.current.close();
      }
    };

    chatPopup.current = window.open("/chat.html", topic.topicName);
    window.removeEventListener("message", chatPopup.messageEvent);
    window.addEventListener("message", chatPopup.messageEvent);
  };

  const receiveMessageHandler = (newMessage) => {
    chatPopup.current.postMessage(
      { event: "chat", type: "receive", data: newMessage },
      "*"
    );
  };

  return (
    <div>
      <TopicList
        connected={connected}
        topicList={topicList}
        userInfo={userInfo}
        onJoinTopic={joinTopicHandler}
        onMessage={receiveMessageHandler}
      />
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

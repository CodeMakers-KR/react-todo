import { useEffect, useRef, useState } from "react";
import { connect, disconnect, sendMessage, stompClient } from "./stompHandler";

export default function Chat({ userInfo }) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    connect(setMessage);
    return () => {
      disconnect();
    };
  }, []);

  return (
    <div>
      <Messages userInfo={userInfo} message={message} />
    </div>
  );
}

function Messages({ userInfo, message }) {
  const inputRef = useRef();

  const inputHandler = (event) => {
    if (event.keyCode === 13) {
      // send
      sendMessage(1, "/pub/message", inputRef.current.value, userInfo);
      inputRef.current.value = "";
    }
  };

  const leaveTopicHandler = () => {
    sendMessage(1, "/pub/message", "대화를 종료했습니다.", userInfo);
    stompClient.unsubscribe(`topic_1`);
  };

  return (
    <>
      <div>테스트 토픽</div>
      <div>
        {message.map((msg) => (
          <div
            key={msg.messageId}
          >{`${msg.name}(${msg.email}) -> ${msg.message}`}</div>
        ))}
      </div>
      <input type="text" ref={inputRef} onKeyUp={inputHandler} />
      <button onClick={leaveTopicHandler}>나가기</button>
    </>
  );
}

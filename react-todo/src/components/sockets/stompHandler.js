// WebSocket 연결을 위한 Stopm 객체 임포트
import { Stomp } from "@stomp/stompjs";

export let stompClient = null;
export const connect = (setConnected, setTopicList) => {
  const socket = new WebSocket("ws://192.168.211.11:8080/ws");
  stompClient = Stomp.over(socket);

  stompClient.connect({}, () => {
    setConnected(true);
    stompClient.subscribe(`/sub/topics`, (message) => {
      const { topics } = JSON.parse(message.body);
      setTopicList(topics);
    });
  });
};

export const disconnect = (setConnected) => {
  if (stompClient) {
    setConnected(false);
    stompClient.disconnect();
  }
};

export const sendMessage = (topicId, pubUrl, message, userInfo) => {
  if (stompClient && message) {
    const body = {
      topicId,
      message,
      email: userInfo.email,
      name: userInfo.name,
    };
    stompClient.send(pubUrl, {}, JSON.stringify(body));
  }
};

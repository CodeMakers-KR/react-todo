const baseUrl = "http://localhost:8080";

export const loadAllTopics = async () => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/topics`, {
    method: "GET",
    headers: {
      Authorization: jwt,
    },
  });

  const json = await response.json();
  return json.topics;
};

export const loadTopic = async (topicId) => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/topic/${topicId}`, {
    method: "GET",
    headers: {
      Authorization: jwt,
    },
  });

  const json = await response.json();
  return json;
};

export const joinTopic = async (topicId) => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/topic/${topicId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  });

  const json = await response.json();
  return json;
};

export const makeTopic = async (topicName) => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/topic`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
    body: JSON.stringify({ topicName }),
  });

  const json = await response.json();
  return json;
};

export const leaveTopic = async (topicId) => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/topic/${topicId}`, {
    method: "DELETE",
    headers: {
      Authorization: jwt,
    },
  });

  const json = await response.json();
  return json;
};

export const addTask = async (task, dueDate, priority) => {
  const url = "http://localhost:8888/api/v1/task";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, dueDate, priority }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  if (json.status === 201) {
    return json.body;
  } else {
    throw new Error(json.statusMessage);
  }
};

export const loadTask = async () => {
  const url = "http://localhost:8888/api/v1/task98ruiofjsdl";
  const response = await fetch(url); // 비동기함수

  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json(); // 비동기함수

  if (json.status === 200) {
    return json.body;
  } else {
    throw new Error(json.statusMessage);
  }
};

export const allDoneTask = async () => {
  const url = "http://localhost:8888/api/v1/task";
  const response = await fetch(url, { method: "PUT" });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  if (json.status === 200) {
    return true;
  } else {
    throw new Error(json.statusMessage);
  }
};

export const doneTask = async (taskId) => {
  const url = `http://localhost:8888/api/v1/task/${taskId}`;
  const response = await fetch(url, { method: "PUT" });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  if (json.status === 200) {
    return json.body;
  } else {
    throw new Error(json.statusMessage);
  }
};

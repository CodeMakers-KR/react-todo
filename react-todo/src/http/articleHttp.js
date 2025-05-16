const baseUrl = "http://localhost:8080";

export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/api/v1/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  if (json.status === 200) {
    return json.data;
  }

  throw new Error(json.data);
};

export const loadArticles = async (pageNo = 0, listSize = 20) => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(
    `${baseUrl}/api/v1/board?pageNo=${pageNo}&listSize=${listSize}`,
    {
      method: "GET",
      headers: {
        Authorization: jwt,
      },
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();

  if (json.status === 200) {
    return json;
  }

  throw new Error(JSON.stringify({ data: json.data, error: json.errors }));
};

export const writeArticle = async (subject, content, file) => {
  const jwt = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("subject", subject);
  formData.append("content", content);
  if (file) {
    formData.append("file", file);
  }

  const response = await fetch(`${baseUrl}/api/v1/board`, {
    method: "POST",
    headers: {
      Authorization: jwt,
    },
    body: formData,
  });

  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  console.log(json);
  if (json.status === 200) {
    return json;
  }

  throw new Error(JSON.stringify({ data: json.data, error: json.errors }));
};

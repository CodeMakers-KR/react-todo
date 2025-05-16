const baseUrl = "http://localhost:8080";

export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/api/v1/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  console.log(json);
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

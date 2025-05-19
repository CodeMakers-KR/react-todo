const baseUrl = "http://localhost:8080";

export const loadMyInformation = async () => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/api/v1/member`, {
    method: "GET",
    headers: {
      Authorization: jwt,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();

  if (json.status === 200) {
    return json.data;
  }

  throw new Error(JSON.stringify({ data: json.data, error: json.errors }));
};

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

export const loadArticles = async (pageNo = 0, listSize = 200) => {
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

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  if (json.status === 200) {
    return json;
  }

  throw new Error(JSON.stringify({ data: json.data, error: json.errors }));
};

export const loadArticle = async (id) => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/api/v1/board/${id}`, {
    method: "GET",
    headers: {
      Authorization: jwt,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  if (json.status === 200) {
    return json;
  }

  throw new Error(JSON.stringify({ data: json.data, error: json.errors }));
};

export const loadReplies = async (id) => {
  const jwt = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/api/v1/reply/${id}`, {
    method: "GET",
    headers: {
      Authorization: jwt,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  if (json.status === 200) {
    return json;
  }

  throw new Error(JSON.stringify({ data: json.data, error: json.errors }));
};

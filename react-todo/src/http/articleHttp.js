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

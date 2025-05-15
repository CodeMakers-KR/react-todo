import { useEffect, useState } from "react";
import Login from "./Login";
import ArticleList from "./ArticleList";

export default function ArticleApp() {
  const [token, setToken] = useState();

  useEffect(() => {
    const issuedToken = localStorage.getItem("token");
    setToken(issuedToken);
  }, []);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  return <>{token ? <ArticleList /> : <Login onLogin={loginHandler} />}</>;
}

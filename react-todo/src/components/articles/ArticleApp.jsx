import { useEffect, useState } from "react";
import Login from "./Login";
import ArticleList from "./ArticleList";
import { loadMyInformation } from "../../http/articleHttp";

export default function ArticleApp() {
  const [token, setToken] = useState();

  useEffect(() => {
    let issuedToken = localStorage.getItem("token");
    setToken(issuedToken);
  }, []);

  const loginHandler = async (token) => {
    setToken(token);
    localStorage.setItem("token", token);

    // 내 정보를 조회해서.
    const myInfoJson = await loadMyInformation();
    // sessionStorage에 넣는다.
    sessionStorage.setItem("info", JSON.stringify(myInfoJson));
  };

  return <>{token ? <ArticleList /> : <Login onLogin={loginHandler} />}</>;
}

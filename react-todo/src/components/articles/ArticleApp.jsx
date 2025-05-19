import Login from "./Login";
import ArticleList from "./ArticleList";
import { loadMyInformation } from "../../http/articleHttp";
import { useDispatch, useSelector } from "react-redux";
import { jwtActions } from "../../stores/toolkit/slice/jwtSlice";
import { userInfoActions } from "../../stores/toolkit/slice/userInfoSlice";

export default function ArticleApp() {
  const token = useSelector((store) => store.jwt);
  const loginDispatcher = useDispatch();

  const loginHandler = async (token) => {
    loginDispatcher(jwtActions.init(token));
    // 내 정보를 조회해서.
    const myInfoJson = await loadMyInformation();
    loginDispatcher(userInfoActions.init(myInfoJson));
  };

  return <>{token.jwt ? <ArticleList /> : <Login onLogin={loginHandler} />}</>;
}

import Login from "./Login";
import ArticleList from "./ArticleList";
import { useDispatch, useSelector } from "react-redux";
import { jwtActions } from "../../stores/toolkit/slice/jwtSlice";
import { userInfoCustomActions } from "../../stores/toolkit/slice/userInfoSlice";

export default function ArticleApp() {
  const token = useSelector((store) => store.jwt);
  const loginDispatcher = useDispatch();

  const loginHandler = async (token) => {
    loginDispatcher(jwtActions.init(token));
    loginDispatcher(userInfoCustomActions.load());
  };

  return <>{token.jwt ? <ArticleList /> : <Login onLogin={loginHandler} />}</>;
}

import Login from "./Login";
import ArticleList from "./ArticleList";
import { loadMyInformation } from "../../http/articleHttp";
import { useDispatch, useSelector } from "react-redux";
import { reduxActions } from "../../stores/redux/ReduxStore";

export default function ArticleApp() {
  const token = useSelector((store) => store.jwt);
  const loginDispatcher = useDispatch();

  const loginHandler = async (token) => {
    loginDispatcher({ type: reduxActions.jwt.init, payload: token });
    // 내 정보를 조회해서.
    const myInfoJson = await loadMyInformation();
    loginDispatcher({ type: reduxActions.userInfo.init, payload: myInfoJson });
  };

  return <>{token ? <ArticleList /> : <Login onLogin={loginHandler} />}</>;
}

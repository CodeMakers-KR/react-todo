import { useState } from "react";
import TaskApp from "./components/tasks/TaskApp";
import ArticleApp from "./components/articles/ArticleApp";
import { getQueries } from "./utils/location";
import { loadMyInformation } from "./http/articleHttp";
import { useDispatch, useSelector } from "react-redux";
import { reduxActions } from "./stores/redux/ReduxStore";

function App() {
  const [view, setView] = useState("task");

  // const jwt = useSelector((store) => store.jwt);
  const appDispatcher = useDispatch();

  // {jwt: aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk}
  const queryMap = getQueries();
  if (queryMap.jwt) {
    appDispatcher({ type: reduxActions.jwt.init, payload: queryMap.jwt });
    // localStorage.setItem("token", queryMap.jwt);

    (async () => {
      // 내 정보를 조회해서.
      const myInfoJson = await loadMyInformation();
      appDispatcher({ type: reduxActions.userInfo.init, payload: myInfoJson });
      // sessionStorage에 넣는다.
      // sessionStorage.setItem("info", JSON.stringify(myInfoJson));

      // http://localhost:3000?jwt=aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk
      // http://localhost:3000?
      // window.location.search = "";
    })();
  }

  const viewTask = () => {
    setView("task");
  };
  const viewArticle = () => {
    setView("article");
  };

  return (
    <>
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <button type="button" onClick={viewTask}>
          Task
        </button>
        <button type="button" onClick={viewArticle}>
          Article
        </button>
      </div>

      {view === "task" ? <TaskApp /> : <ArticleApp />}
    </>
  );
}

export default App;

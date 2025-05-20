import { useState } from "react";
import TaskApp from "./components/tasks/TaskApp";
import ArticleApp from "./components/articles/ArticleApp";
import { useDispatch } from "react-redux";
import { jwtCustomActions } from "./stores/toolkit/slice/jwtSlice";
import { userInfoCustomActions } from "./stores/toolkit/slice/userInfoSlice";

function App() {
  const [view, setView] = useState("task");

  // const jwt = useSelector((store) => store.jwt);
  const appDispatcher = useDispatch();

  // {jwt: aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk}
  appDispatcher(jwtCustomActions.autoLogin());
  appDispatcher(userInfoCustomActions.load());

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

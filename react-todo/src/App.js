import { useState } from "react";
import TaskApp from "./components/tasks/TaskApp";
import ArticleApp from "./components/articles/ArticleApp";
import { getQueries } from "./utils/location";
import { loadMyInformation } from "./http/articleHttp";
import ReduxProvider from "./stores/redux/ReduxStore";

function App() {
  const [view, setView] = useState("task");

  // {jwt: aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk}
  const queryMap = getQueries();
  if (queryMap.jwt) {
    localStorage.setItem("token", queryMap.jwt);

    (async () => {
      // 내 정보를 조회해서.
      const myInfoJson = await loadMyInformation();
      // sessionStorage에 넣는다.
      sessionStorage.setItem("info", JSON.stringify(myInfoJson));

      // http://localhost:3000?jwt=aslkjsdlkfjaslfasfjaslalkfdaslfkasdfkasjdfk
      // http://localhost:3000?
      window.location.search = "";
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
      <ReduxProvider>
        {view === "task" ? <TaskApp /> : <ArticleApp />}
      </ReduxProvider>
    </>
  );
}

export default App;

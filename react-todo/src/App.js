import { useState } from "react";
import TaskApp from "./components/tasks/TaskApp";
import ArticleApp from "./components/articles/ArticleApp";

function App() {
  const [view, setView] = useState("task");

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

import Login from "../components/articles/Login";
import Root from "../components/root/Root";
import TaskApp from "../components/tasks/TaskApp";
import ArticleLayout from "../layout/ArticleLayout";
import { articleRouter } from "./articleRouter";

export const rootRouter = [
  {
    index: true, // http://localhost:3000
    element: <Root />,
  },
  {
    path: "task", // http://localhost:3000/task
    element: <TaskApp />,
  },
  {
    path: "article/", // http://localhost:3000/article
    element: <ArticleLayout />,
    children: articleRouter,
  },
  {
    path: "login", // http://localhost:3000/login
    element: <Login />,
  },
];

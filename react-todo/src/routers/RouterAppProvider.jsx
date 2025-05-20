import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root/Root";
import TaskApp from "../components/tasks/TaskApp";
import ArticleApp from "../components/articles/ArticleApp";

export default function RouterAppProvider() {
  // Router Rule 생성.
  const routers = createBrowserRouter([
    {
      path: "/", // http://localhost:3000
      element: <Root />,
    },
    {
      path: "/task", // http://localhost:3000/task
      element: <TaskApp />,
    },
    {
      path: "/article", // http://localhost:3000/article
      element: <ArticleApp />,
    },
  ]);

  return <RouterProvider router={routers} />;
}

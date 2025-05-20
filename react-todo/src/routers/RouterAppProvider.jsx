import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root/Root";
import TaskApp from "../components/tasks/TaskApp";
import RootLayout from "../layout/RootLayout";
import Login from "../components/articles/Login";
import ArticleList from "../components/articles/ArticleList";
import WriteArticle from "../components/articles/WriteArticle";
import ArticleLayout from "../layout/ArticleLayout";

export default function RouterAppProvider() {
  // Router Rule 생성.
  const routers = createBrowserRouter([
    {
      path: "/", // http://localhost:3000
      element: <RootLayout />,
      children: [
        {
          path: "", // http://localhost:3000
          element: <Root />,
        },
        {
          path: "task", // http://localhost:3000/task
          element: <TaskApp />,
        },
        {
          path: "article/", // http://localhost:3000/article
          element: <ArticleLayout />,
          children: [
            {
              path: "", // http://localhost:3000/article
              element: <ArticleList />,
            },
            {
              path: "write", // http://localhost:3000/article/write
              element: <WriteArticle />,
            },
          ],
        },
        {
          path: "login", // http://localhost:3000/login
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

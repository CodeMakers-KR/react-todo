import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root/Root";
import TaskApp from "../components/tasks/TaskApp";
import RootLayout from "../layout/RootLayout";
import Login from "../components/articles/Login";
import ArticleList from "../components/articles/ArticleList";
import WriteArticle from "../components/articles/WriteArticle";
import ArticleLayout from "../layout/ArticleLayout";
import Article from "../components/articles/Article";
import Error from "../layout/Error";

export default function RouterAppProvider() {
  // Router Rule 생성.
  const routers = createBrowserRouter([
    {
      path: "/", // http://localhost:3000
      element: <RootLayout />,
      errorElement: <Error />,
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
              path: "view/:id", // http://localhost:3000/article/view/123
              element: <Article />,
            },
            {
              path: "list", // http://localhost:3000/article/list
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Error from "../layout/Error";
import { rootRouter } from "./rootRouter";

export default function RouterAppProvider() {
  // Router Rule 생성.
  const routers = createBrowserRouter([
    {
      path: "/", // http://localhost:3000
      element: <RootLayout />,
      errorElement: <Error />,
      children: rootRouter,
    },
  ]);

  return <RouterProvider router={routers} />;
}

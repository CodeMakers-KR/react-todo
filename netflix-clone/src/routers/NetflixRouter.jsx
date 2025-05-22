import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NetflixLayout from "../components/layout/NetflixLayout";
import NetflixMain from "../components/main/NetflixMain";
import Search from "../components/header/Search";

export default function NetflixRouter() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <NetflixLayout />,
      children: [
        { index: true, element: <NetflixMain /> },
        { path: ":search", element: <Search /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

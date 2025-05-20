import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

export default function RootLayout() {
  return (
    <div className="main-container">
      <HeaderNavigation />
      <Outlet />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import { useDispatch, useSelector } from "react-redux";
import { userInfoCustomActions } from "../stores/toolkit/slice/userInfoSlice";
import Chat from "../components/sockets/Chat";
import PopupChat from "../components/sockets/PopupChat";
import TopicChat from "../components/sockets/TopicChat";

export default function RootLayout() {
  const jwt = localStorage.getItem("token");
  const userInfo = useSelector((store) => store.userInfo);
  const rootDispatcher = useDispatch();
  if (jwt && !userInfo.email) {
    rootDispatcher(userInfoCustomActions.reload());
  }

  return (
    <div className="main-container">
      {userInfo.email && <TopicChat userInfo={userInfo} />}
      <HeaderNavigation />
      <Outlet />
    </div>
  );
}

import HeaderNavigation from "./HeaderNavigation";
import { useDispatch, useSelector } from "react-redux";
import { userInfoCustomActions } from "../stores/toolkit/slice/userInfoSlice";

export default function Error() {
  const jwt = localStorage.getItem("token");
  const userInfo = useSelector((store) => store.userInfo);
  const rootDispatcher = useDispatch();
  if (jwt && !userInfo.email) {
    rootDispatcher(userInfoCustomActions.reload());
  }

  return (
    <div className="main-container">
      <HeaderNavigation />
      <div>Error!!!!!!!! - 페이지를 찾을 수 없습니다!!!</div>
    </div>
  );
}

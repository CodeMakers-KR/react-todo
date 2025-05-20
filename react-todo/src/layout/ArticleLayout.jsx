import { NavLink, Outlet } from "react-router-dom";
import { isAuthority } from "../utils/resource";
import { useSelector } from "react-redux";

export default function ArticleLayout() {
  const userInfo = useSelector((store) => store.userInfo);

  return (
    <div style={{ display: "flex" }}>
      <div>
        {isAuthority("BOARD_READ_LIST", userInfo) && (
          <NavLink to="/article/list">게시글 목록</NavLink>
        )}
        {isAuthority("BOARD_CREATE", userInfo) && (
          <NavLink to="/article/write">게시글 작성</NavLink>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

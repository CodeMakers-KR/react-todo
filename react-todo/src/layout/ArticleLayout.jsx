import { NavLink, Outlet } from "react-router-dom";

export default function ArticleLayout() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <NavLink to="/article">게시글 목록</NavLink>
        <NavLink to="/article/write">게시글 작성</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

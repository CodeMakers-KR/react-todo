import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtActions } from "../stores/toolkit/slice/jwtSlice";
import { userInfoActions } from "../stores/toolkit/slice/userInfoSlice";
import { isAuthority } from "../utils/resource";

export default function HeaderNavigation() {
  const jwt = localStorage.getItem("token");
  const userInfo = useSelector((store) => store.userInfo);

  const isLoginState = jwt && userInfo.email;

  const headerDispatcher = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    headerDispatcher(jwtActions.remove());
    headerDispatcher(userInfoActions.remove());
    navigate("/");
  };

  return (
    <header>
      <nav className="menu-navigation">
        <ul>
          <li>
            <NavLink to="/">Root</NavLink>
          </li>
          <li>
            <NavLink to="/task">Tasks</NavLink>
          </li>
          {isLoginState && isAuthority("BOARD_READ_LIST", userInfo) && (
            <li>
              <NavLink to="/article/list">Articles</NavLink>
            </li>
          )}
          <li>
            {!isLoginState && <NavLink to="/login">Login</NavLink>}
            {isLoginState && (
              <span onClick={logoutHandler} style={{ cursor: "pointer" }}>
                Logout
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

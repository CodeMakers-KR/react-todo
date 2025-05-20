import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { jwtCustomActions } from "../../stores/toolkit/slice/jwtSlice";
import { userInfoCustomActions } from "../../stores/toolkit/slice/userInfoSlice";

export default function Root() {
  const appDispatcher = useDispatch();
  const navigate = useNavigate();

  appDispatcher(jwtCustomActions.autoLogin());
  appDispatcher(userInfoCustomActions.load(navigate, "/"));

  return (
    <div>
      React Application 입니다.
      <div>
        <Link to="/task">Tasks</Link>
        <Link to="/article">Articles</Link>
      </div>
    </div>
  );
}

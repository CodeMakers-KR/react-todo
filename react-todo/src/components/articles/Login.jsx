import { useEffect, useRef } from "react";
import Input from "../ui/Input";
import { login } from "../../http/articleHttp";
import { useDispatch, useSelector } from "react-redux";
import { jwtActions } from "../../stores/toolkit/slice/jwtSlice";
import { userInfoCustomActions } from "../../stores/toolkit/slice/userInfoSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginDispatcher = useDispatch();
  // URL 라우트를 변경시키는 Hook.
  const navigate = useNavigate();

  // 로그인이 되어있는 상태에서 Login 컴포넌트를 보려고 할 때
  // Root 컴포넌트로 이동을 시킨다.
  const userInfo = useSelector((store) => store.userInfo);
  const jwt = localStorage.getItem("token");
  useEffect(() => {
    if (jwt && userInfo.email) {
      navigate("/");
    }
  }, [jwt, userInfo, navigate]);

  const clickGoogleLoginHandler = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const clickNaverLoginHandler = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver";
  };

  const loginHandler = (token) => {
    loginDispatcher(jwtActions.init(token));
    loginDispatcher(userInfoCustomActions.load(navigate, "/", token));
  };

  const clickLoginButtonHandler = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // fetch.
    try {
      const token = await login(email, password);
      // 브라우저 데이터베이스에 기록을 시킨다.
      loginHandler(token);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <Input
        id="email"
        title="Email"
        type="text"
        placeholder="Email"
        ref={emailRef}
      />
      <Input
        id="password"
        title="Password"
        type="password"
        placeholder="Password"
        ref={passwordRef}
      />
      <button type="button" onClick={clickLoginButtonHandler}>
        Login
      </button>
      <hr />

      <button type="button" onClick={clickGoogleLoginHandler}>
        Google Login
      </button>
      <button type="button" onClick={clickNaverLoginHandler}>
        Naver Login
      </button>
    </div>
  );
}

import { useRef } from "react";
import Input from "../ui/Input";
import { login } from "../../http/articleHttp";

export default function Login({ onLogin }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const clickGoogleLoginHandler = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const clickLoginButtonHandler = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // fetch.
    try {
      const token = await login(email, password);
      // 브라우저 데이터베이스에 기록을 시킨다.
      onLogin(token);
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
    </div>
  );
}

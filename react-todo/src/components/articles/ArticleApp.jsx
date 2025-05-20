import Login from "./Login";
import ArticleList from "./ArticleList";
import { useSelector } from "react-redux";

export default function ArticleApp() {
  const token = useSelector((store) => store.jwt);

  return <>{token.jwt ? <ArticleList /> : <Login />}</>;
}

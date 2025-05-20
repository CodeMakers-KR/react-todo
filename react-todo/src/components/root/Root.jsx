import { Link } from "react-router-dom";

export default function Root() {
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

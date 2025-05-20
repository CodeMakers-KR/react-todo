import { Link } from "react-router-dom";

export default function HeaderNavigation() {
  return (
    <header>
      <nav className="menu-navigation">
        <ul>
          <li>
            <Link to="/">Root</Link>
          </li>
          <li>
            <Link to="/task">Tasks</Link>
          </li>
          <li>
            <Link to="/article">Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

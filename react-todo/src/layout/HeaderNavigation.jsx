import { NavLink } from "react-router-dom";

export default function HeaderNavigation() {
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
          <li>
            <NavLink to="/article/list">Articles</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

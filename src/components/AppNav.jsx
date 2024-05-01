import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

const ActiveLink = isActive => (isActive ? styles.active : undefined);

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => ActiveLink(isActive)}
            to="/app/cities"
          >
            cities
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => ActiveLink(isActive)}
            to="/app/countries"
          >
            countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;

import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";
function PageNav() {
  const ActiveLink = isActive => (isActive ? styles.active : undefined);

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink
            className={({ isActive }) => ActiveLink(isActive)}
            to="/Product"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => ActiveLink(isActive)}
            to="/pricing"
          >
            pricing
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to="/login">
            log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

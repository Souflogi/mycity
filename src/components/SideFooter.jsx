import styles from "./SideFooter.module.css";

function SideFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyRights}>
        &copy; Copyright {new Date().getFullYear()} by Soufiane Sammah Inc.
      </p>
    </footer>
  );
}

export default SideFooter;

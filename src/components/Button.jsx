import styles from "./Button.module.css";
function Button({ children }) {
  return (
    <button className={`${styles.btn} ${styles.primary}`}>{children}</button>
  );
}

export default Button;

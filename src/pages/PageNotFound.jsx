import styles from "./PageNotFound.module.css";
import lostGif from "../assets/lost.gif";

export default function PageNotFound() {
  return (
    <div className={styles["not-found"]}>
      <h1>Page not found </h1>
      <img src={lostGif} alt="" />
    </div>
  );
}

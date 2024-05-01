import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

function AppLayout({ cities }) {
  return (
    <main className={styles.app}>
      <Sidebar cities={cities} />
      <Map />
    </main>
  );
}

export default AppLayout;

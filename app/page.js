import Image from "next/image";
import styles from "./page.module.css";
import Login from "./auth/login/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-secondary">Welcome Infinity Craft Space</h1>

      <Login />
    </main>
  );
}

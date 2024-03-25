import Image from "next/image";
import styles from "./page.module.css";
import Calendar from "./_components/calendar";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Calendar  />
    </main>
  );
}

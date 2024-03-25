"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Calendar from "./_components/calendar";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const params = useSearchParams();
  const currentDate = new Date();
  const year = parseInt(params.get("year") || currentDate.getFullYear().toString() );
  const month = parseInt(params.get("month") || currentDate.getMonth().toString() );
  const date = parseInt(params.get("date") || currentDate.getDate().toString() );
  return (
    <main className={styles.main}>
      <Calendar month={month} year={year} date={date}/>
    </main>
  );
}

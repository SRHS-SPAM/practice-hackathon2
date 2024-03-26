"use client"
import { useSearchParams } from "next/navigation";
import styles from "./today.module.css"

const Today = () => {
    const params = useSearchParams();
    const currentDate = new Date();
    const year = parseInt(params.get("year") || currentDate.getFullYear().toString() );
    const month = parseInt(params.get("month") || currentDate.getMonth().toString() ) + 1;
    const date = parseInt(params.get("date") || currentDate.getDate().toString() );
    return (
        <div className={styles.wrap}>오늘은 <span className={styles.ymd}>{year}년 {month}월 {date}일</span> 입니다.</div>
    )
}
export default Today;
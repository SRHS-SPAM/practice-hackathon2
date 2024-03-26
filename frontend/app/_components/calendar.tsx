import { RefObject, useEffect } from "react";
import styles from "./calendar.module.css";
import Link from "next/link";
interface MoveYmdProps {
  y?: number;
  m?: number;
  d?: number;
  movingway: "pre" | "nxt" | "cur";
}
interface CalendarDateProps {
  year: number;
  month: number;
  date: number;
}
interface DatesFace {
  date: number;
  mon: "pre" | "cur" | "nxt";
}
const CalendarDate = ({
  year,
  month,
  date,
}: CalendarDateProps) => {
  const Dates: DatesFace[][] = [];
  const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const dummy = [0, 0, 0, 0, 0, 0, 0,0 ,0 ,0 ,0 ,0, 0];
  const preMonthDate = new Date(year, month, 0);
  const preMonthDay = preMonthDate.getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  Dates.push([{ date: preMonthDate.getDate(), mon: "pre" }]);
  
  for (let i = 0; i < preMonthDay; i++) {
    Dates[0].unshift({ date: preMonthDate.getDate() - i - 1, mon: "pre" });
  }
  for (let i = 0; i < 6; i++) {
    for (; Dates[i].length < 7; ) {
      const len = Dates[i].length - 1;
      if (Dates[i][len].mon == "pre") {
        Dates[i].push({ date: 1, mon: "cur" });
      } else if (Dates[i][len].date == lastDay) {
        Dates[i].push({ date: 1, mon: "nxt" });
      } else {
        Dates[i].push({
          date: Dates[i][len].date + 1,
          mon: Dates[i][len].mon,
        });
      }
    }
    if (i < 5) {
      if (Dates[i][6].mon == "pre") {
        Dates.push([{ date: 1, mon: "cur" }]);
      } else if (Dates[i][6].mon == "cur" && Dates[i][6].date == lastDay) {
        Dates.push([{ date: 1, mon: "nxt" }]);
      } else {
        Dates.push([{ date: Dates[i][6].date + 1, mon: Dates[i][6].mon }]);
      }
    }
  }

  const getQueryString = (t:string, tt:number) => {
    let tyear = t=="pre" && month == 0 ? year-1: t=="nxt" && month == 11? year +1 : year;
    let d = t=="pre" ? -1: t=="nxt" ?1: 0;
    let tmonth = (month+d+12)%12;
    let tdate = tt;
    return `/?year=${tyear}&month=${tmonth}&date=${tdate}`
  }

  return (
    <>
    <div className={styles.wrap}>
      <div className={styles.daywrap}>
      {Days.map((ai, i) => (
        <div key={i}>{ai}</div>
      ))
      }</div>
      {Dates.map((ai, i) => (
        <div
          key={i}
          className={styles.rows}
        >
          {ai.map((aj, j) => (
            <Link
              key={j}
              className={styles.cols}
              href={getQueryString(aj.mon, aj.date)}
            >
              <div
                className={styles.items + " " + (aj.mon !== "cur" ? styles.itemspp : "") + " " + (aj.mon==="cur" && aj.date === date ? styles.today :"")}
              >
                {aj.date}
              </div>
            </Link>
          ))}
        </div>
      ))}</div>
    </>
  );
};

export default CalendarDate;

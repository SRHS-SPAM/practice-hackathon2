"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./cafeMenu.module.css";
import { CafeMenuPaneProps } from "../page";
import CafeMenuPane from "./cafeMenuPane";
import { useState, useRef, useEffect } from "react";

interface CafeMenuProps {
  data: CafeMenuPaneProps[];
}

const CafeMenu = ({ data }: CafeMenuProps) => {
    const panewrapref = useRef(null);
  const [select, setSelect] = useState(0);
  useEffect(()=>{
    panewrapref.current?.style.setProperty("margin-left", (-476 * select)+"px");
  }, [select]);
  let datalen = data.length;
  return (
    <div className={styles.wrap}>
      <div className={styles.cafewrap}>
        <div
          className={styles.arrowwrap}
          onClick={() => setSelect((select + datalen - 1) % datalen)}
        >
          <ChevronLeft className={styles.arrow} width={36} height={36} />
        </div>
        <div className={styles.child}>
          <div className={styles.panewrap} ref={panewrapref}>
            {data.map((ai, i) => (
              <CafeMenuPane data={ai.data} title={ai.title} key={i} />
            ))}
          </div>
        </div>
        <div
          className={styles.arrowwrap}
          onClick={() => setSelect((select + datalen + 1) % datalen)}
        >
          <ChevronRight className={styles.arrow} width={36} height={36} />
        </div>
      </div>
      <div className={styles.statuswrap}>
        {data.map((ai, i) => {
          if (i === select)
            return (
              <div
                className={`${styles.status} ${styles.activestatus}`}
                key={i}
              />
            );
          else return <div className={styles.status} key={i} />;
        })}
      </div>
    </div>
  );
};

export default CafeMenu;

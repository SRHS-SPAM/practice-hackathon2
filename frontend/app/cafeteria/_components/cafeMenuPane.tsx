import styles from "./cafeMenuPane.module.css";
interface CafeMenuPaneProps {
  title: string;
  data: string[];
}

const CafeMenuPane = ({ title, data }: CafeMenuPaneProps) => {
  return (
    <div className={styles.wrap}>
      <span className={`${styles.title} ${styles.text}`}>{title}</span>
      <div className={styles.menuwrap}>
        {data.map((ai, i) => (
          <div key={i} className={styles.text}>
            {ai}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeMenuPane;

import Image from "next/image";
import SPAM from "@/public/spam.png"
import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={styles.wrap}>
            <Image 
            width={50}
            height={50}
            src={SPAM} alt="스팸 로고"
            className={styles.image} />
        </div>
    )
}

export default Header;
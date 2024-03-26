import Link from "next/link";
import GITHUB from "@/public/social-github-icon-1.svg"
import INSTA from "@/public/instagram-icon-1.svg"

import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.wrap}>
      <div className={styles.child}>
        <Link href="https://github.com/SRHS-SPAM">
          <Image src={GITHUB} alt="깃허브"/> 
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="https://www.instagram.com/spam._srh/">
          <Image src={INSTA} alt="인스타그램"/>
        </Link>
      </div>
      <div>Calin |  hackerthon_ready.com | SPAM | PROJECT Calin</div>
    </div>
  );
}

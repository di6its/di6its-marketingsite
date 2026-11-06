"use client";

import { useLang, T } from "@/contexts/LangContext";
import styles from "./Nav.module.css";

export default function Nav() {
  const { lang, toggle } = useLang();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          di<span className={styles.logoG}>6</span>its
        </a>
        <ul className={styles.links}>
          <li><a href="#for-who"><T en="Who Is This For" tl="Para Kanino" /></a></li>
          <li><a href="#courses"><T en="Courses" tl="Mga Kurso" /></a></li>
          <li><a href="#founders"><T en="Founders" tl="Mga Founder" /></a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className={styles.right}>
          <button className={styles.langBtn} onClick={toggle}>
            {lang === "tl" ? "🇺🇸 English" : "🇵🇭 Filipino"}
          </button>
          <a href="#enroll" className="btn btn-grape">
            <T en="Join Waitlist" tl="Sumali sa Waitlist" />
          </a>
        </div>
      </div>
    </nav>
  );
}

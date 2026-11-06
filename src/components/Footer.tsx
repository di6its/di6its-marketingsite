"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>di<span className={styles.logoG}>6</span>its</span>
        <p className={styles.copy}><T en="Helping Filipinos earn what they are worth." tl="Tinutulungan ang mga Pilipino na kumita ng nararapat sa kanila." /></p>
        <p className={styles.copy}>&copy; 2026 di6its. Philippines.</p>
      </div>
    </footer>
  );
}

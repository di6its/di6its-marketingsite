"use client";

import { T } from "@/contexts/LangContext";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <div className={styles.item}><span>✅</span><span><T en="No MLM. No pyramids." tl="Walang MLM. Walang pyramiding." /></span></div>
        <div className={styles.item}><span>✅</span><span><T en="Skills, not schemes." tl="Kasanayan, hindi iskema." /></span></div>
        <div className={styles.item}><span>✅</span><span><T en="You earn through your own work." tl="Kumikita ka sa sarili mong trabaho." /></span></div>
        <div className={styles.item}><span>✅</span><span><T en="No fake urgency or hidden fees." tl="Walang pekeng urgency o nakatagong bayad." /></span></div>
      </div>
    </div>
  );
}

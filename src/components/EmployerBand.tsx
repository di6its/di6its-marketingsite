"use client";

import { T } from "@/contexts/LangContext";
import styles from "./EmployerBand.module.css";

export default function EmployerBand() {
  return (
    <div className={styles.band}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>💼 <T en="For Employers" tl="Para sa mga Employer" /></p>
          <h2><T en="Looking for a " tl="Naghahanap ng " /><span><T en="trained remote worker?" tl="magaling na remote worker?" /></span></h2>
          <p><T en="Our graduates go through 30 days of real remote work training. If you need a customer service specialist, QA tester, or entry-level developer from the Philippines, we can connect you with people we personally trained. No agency fees. Just an introduction." tl="Ang aming mga graduate ay dumaan sa 30 araw ng tunay na pagsasanay sa remote work. Kung kailangan mo ng customer service specialist, QA tester, o entry-level developer mula sa Pilipinas, maaari naming ikonekta ka sa aming talent pool. Walang bayad sa ahensya, pagpapakilala lang." /></p>
          <div className={styles.features}>
            <span className={styles.etag}>✅ Virtual Assistant</span>
            <span className={styles.etag}>✅ Low Code / No Code</span>
            <span className={styles.etag}>✅ Marketing and Sales</span>
            <span className={styles.etag}>✅ Remote-Ready</span>
          </div>
        </div>
        <a href="mailto:hello@di6its.com" className="btn btn-blue">
          <T en="Get in Touch →" tl="Makipag-ugnayan sa Amin" />
        </a>
      </div>
    </div>
  );
}

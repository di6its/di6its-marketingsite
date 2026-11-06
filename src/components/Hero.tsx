"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blobs} aria-hidden>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
      </div>
      <div className={styles.inner}>
        <div>
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span><T en="Now enrolling — Batch 1" tl="Nagbubukas na ng enrollment — Batch 1" /></span>
          </div>
          <h1 className={styles.h1}>
            <span><T en="One life. " tl="Isang buhay lang. " /></span>
            <br />
            <span><T en="Make it " tl="Gawin itong " /></span>
            <span className={styles.h1Grape}><T en="6 digits." tl="6 digits." /></span>
          </h1>
          <p className={styles.sub}>
            <T
              en="You were not born to just get by. You were born to travel, experience the world, and choose where you live and work. di6its teaches any Filipino how to earn 6 digits a month through remote work, the income that makes that life possible."
              tl="Hindi ka nabuhay para mabuhay lang. Nabuhay ka para mabuhay nang buo — maglakbay, maranasan, pumili kung saan ka gusto manirahan. Itinuturo ng di6its kung paano kumita ng 6 digits sa isang buwan sa pamamagitan ng remote work, para sa kahit sinong Pilipino."
            />
          </p>
          <div className={styles.actions}>
            <a href="#enroll" className="btn btn-cta">
              <T en="Start the 30-Day Playbook →" tl="Simulan ang 30-Day Playbook →" />
            </a>
            <a href="#for-who" className="btn btn-outline">
              <T en="Is this for me?" tl="Para ba ito sa akin?" />
            </a>
          </div>
          <div className={styles.proof}>
            <div className={styles.avatars}>
              <span>JM</span><span>RC</span><span>AL</span><span>KD</span><span>+</span>
            </div>
            <p className={styles.proofLabel}>
              <strong><T en="Waitlist is open." tl="Bukas ang waitlist." /></strong>{" "}
              <span><T en="First batch launching soon." tl="Ang unang batch ay magsisimula na." /></span>
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}><T en="Monthly income comparison" tl="Paghahambing ng buwanang kita" /></div>
          <div className={styles.incomeRow}>
            <span className={styles.incomeLabel}><T en="Traditional office job" tl="Tradisyonal na trabaho" /></span>
            <span className={styles.incomeAmt}>&#8369;18,000</span>
          </div>
          <div className={styles.incomeRow}>
            <span className={styles.incomeLabel}>BPO / call center</span>
            <span className={styles.incomeAmt}>&#8369;25,000</span>
          </div>
          <div className={styles.incomeRow}>
            <span className={styles.incomeLabel}><T en="Freelance online" tl="Freelance online" /></span>
            <span className={`${styles.incomeAmt} ${styles.amtBlue}`}>&#8369;60,000+</span>
          </div>
          <div className={styles.incomeRow}>
            <span className={styles.incomeLabel}><T en="Remote (foreign company)" tl="Remote (dayuhang kumpanya)" /></span>
            <span className={`${styles.incomeAmt} ${styles.amtPapaya}`}>&#8369;100,000+</span>
          </div>
          <p className={styles.cardFooter}>
            <T
              en="Typical market rates for remote roles in customer service, QA, and development."
              tl="Batay sa karaniwang rate para sa remote na trabaho sa customer service, QA, at development."
            />
          </p>
        </div>
      </div>
    </section>
  );
}

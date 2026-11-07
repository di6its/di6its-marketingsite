"use client";

import Image from "next/image";
import { T } from "@/contexts/LangContext";
import IncomeComparison from "./IncomeComparison";
import styles from "./Hero.module.css";

const AVATARS = ["jm", "rc", "al", "kd"];

export default function Hero() {
  return (
    <section className={styles.hero}>
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
            <strong><T en="You were not born to just get by." tl="Hindi ka nabuhay para mabuhay lang." /></strong>{" "}
            <T
              en="You were born to travel, experience the world, and choose where you live and work. di6its teaches any Filipino how to earn 6 digits a month through remote work, the income that makes that life possible."
              tl="Nabuhay ka para mabuhay nang buo — maglakbay, maranasan, pumili kung saan ka gusto manirahan. Itinuturo ng di6its kung paano kumita ng 6 digits sa isang buwan sa pamamagitan ng remote work, para sa kahit sinong Pilipino."
            />
          </p>
          <div className={styles.actions}>
            <a href="#enroll" className="btn btn-gradient btn-pill">
              <T en="Start the 30-Day Playbook →" tl="Simulan ang 30-Day Playbook →" />
            </a>
            <a href="#for-who" className="btn btn-outline btn-pill">
              <svg className={styles.playIcon} viewBox="0 0 12 12" aria-hidden>
                <path d="M2.5 1.2v9.6L10.5 6z" />
              </svg>
              <T en="Is this for me?" tl="Para ba ito sa akin?" />
            </a>
          </div>
          <div className={styles.proof}>
            <div className={styles.avatars} aria-hidden>
              {AVATARS.map((id) => (
                <Image key={id} src={`/images/hero/avatar-${id}.webp`} alt="" width={36} height={36} />
              ))}
              <span>+</span>
            </div>
            <p className={styles.proofLabel}>
              <strong><T en="Waitlist is open." tl="Bukas ang waitlist." /></strong>{" "}
              <span><T en="First batch launching soon." tl="Ang unang batch ay magsisimula na." /></span>
            </p>
          </div>
        </div>
        <IncomeComparison />
      </div>
    </section>
  );
}

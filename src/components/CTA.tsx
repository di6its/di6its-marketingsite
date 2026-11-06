"use client";

import { useState } from "react";
import { useLang, T } from "@/contexts/LangContext";
import styles from "./CTA.module.css";

export default function CTA() {
  const { lang } = useLang();
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNote(lang === "tl"
      ? "Nandito ka na sa listahan! Makikipag-ugnayan kami sa iyo sa lalong madaling panahon."
      : "You're on the list! We'll be in touch soon."
    );
    setEmail("");
  }

  return (
    <section className={styles.section} id="enroll">
      <div className={styles.inner}>
        <p className={styles.eyebrow}><T en="Join Batch 1" tl="Sumali sa Batch 1" /></p>
        <h2><T en="One life. Let's start living it." tl="Isang buhay ka lang. Simulan na natin." /></h2>
        <p className={styles.desc}><T en="Leave your email and we will reach out when enrollment opens. No spam, no fake countdown timers. Just a heads-up when the first batch is ready." tl="Iwanan ang iyong email at makikipag-ugnayan kami kapag bumukas ang enrollment. Walang spam, walang pekeng countdown timer." /></p>
        <form className={styles.row} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="your@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-cta"><T en="Join Waitlist" tl="Sumali sa Waitlist" /></button>
        </form>
        {note && <p className={styles.successNote}>{note}</p>}
        <p className={styles.finePrint}><T en="We respect your privacy. Unsubscribe anytime." tl="Iginagalang namin ang iyong privacy. I-unsubscribe anumang oras." /></p>
      </div>
    </section>
  );
}

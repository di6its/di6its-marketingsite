"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Playbook.module.css";

const weeks = [
  {
    num: "W1",
    en: { title: "Pick Your Track", desc: "VA, low code/no code, or marketing and sales. We help you figure out which track fits your background and goals, then you go all in on that one." },
    tl: { title: "Piliin ang Iyong Track", desc: "VA, low code/no code, o marketing at sales. Tutulungan ka naming malaman kung aling track ang pinaka-angkop sa iyong background at layunin." },
  },
  {
    num: "W2",
    en: { title: "Build the Skills", desc: "Hands-on training in your chosen track. Real tools, real tasks, and small projects you can actually show to a client or employer." },
    tl: { title: "Palakasin ang Iyong Kasanayan", desc: "Hands-on na pagsasanay sa iyong piniling track. Mga tool, mga gawain, at mga real na proyekto para mapatunayan na kaya mo ito." },
  },
  {
    num: "W3",
    en: { title: "Put Yourself Out There", desc: "Build your portfolio, set up your profile on platforms like Upwork or LinkedIn, and start reaching out to potential clients or employers." },
    tl: { title: "Ipakita ang Iyong Sarili", desc: "Gumawa ng portfolio, i-setup ang iyong profile sa mga platform tulad ng Upwork o LinkedIn, at magsimulang mag-outreach sa mga potensyal na kliyente o employer." },
  },
  {
    num: "W4",
    en: { title: "Get Paid", desc: "Close your first client or job, negotiate your rate in USD, and set up your finances so you are ready when the money comes in." },
    tl: { title: "Makuha ang Unang Bayad", desc: "Paano mag-close ng unang kliyente o trabaho, mag-negotiate ng rate sa USD, at i-setup ang iyong pananalapi para sa bagong kita." },
  },
];

const includes = [
  { en: "30 daily action checklists", tl: "30 araw-araw na action checklist" },
  { en: "Resume and LinkedIn templates", tl: "Mga template ng resume at LinkedIn" },
  { en: "Job board list (the ones that actually work)", tl: "Listahan ng job boards na talagang gumagana" },
  { en: "Interview Q&A practice guide", tl: "Gabay sa interview Q&A practice" },
  { en: "Salary negotiation scripts", tl: "Mga script sa salary negotiation" },
  { en: "Philippine tax and finance guide for remote workers", tl: "Gabay sa buwis at pananalapi para sa mga remote worker sa Pilipinas" },
  { en: "Private community group", tl: "Pribadong grupo ng komunidad" },
  { en: "Live Q&A with both founders", tl: "Live Q&A kasama ang parehong mga founder" },
];

export default function Playbook() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className={styles.wrap}>
          <div className={styles.header}>
            <div>
              <span className={styles.badge}>★ <T en="Flagship Course" tl="Pangunahing Kurso" /></span>
              <h2>The 30-Day di<span className={styles.dimSix}>6</span>its Playbook</h2>
              <p><T en="A day-by-day action plan based on exactly what we did. Each day has one clear task. No overwhelm, no guesswork. Just the next step." tl="Isang araw-araw na action plan batay sa eksaktong ginawa namin. Bawat araw ay may isang malinaw na gawain. Walang kalituhan, walang hula-hula." /></p>
            </div>
            <a href="#enroll" className="btn btn-cta"><T en="Enroll in Batch 1 →" tl="Mag-enroll sa Batch 1 →" /></a>
          </div>
          <div className={styles.body}>
            <ul className={styles.weekList}>
              {weeks.map((w) => (
                <li key={w.num} className={styles.weekItem}>
                  <div className={styles.weekNum}>{w.num}</div>
                  <div>
                    <h4><T en={w.en.title} tl={w.tl.title} /></h4>
                    <p><T en={w.en.desc} tl={w.tl.desc} /></p>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <p className={styles.includesTitle}><T en="What's included" tl="Kasama sa kurso" /></p>
              <ul className={styles.includeList}>
                {includes.map((item) => (
                  <li key={item.en}>
                    <span className={styles.check}>✓</span>
                    <span><T en={item.en} tl={item.tl} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

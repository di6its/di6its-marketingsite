import type { CSSProperties } from "react";
import { T } from "@/contexts/LangContext";
import RevealSection from "./RevealSection";
import styles from "./Playbook.module.css";

const WEEKS = [
  {
    num: "W1",
    days: { en: "Days 1–7", tl: "Araw 1–7" },
    en: { title: "Pick Your Track", desc: "VA, low code/no code, or marketing and sales. We help you figure out which track fits your background and goals, then you go all in on that one." },
    tl: { title: "Piliin ang Iyong Track", desc: "VA, low code/no code, o marketing at sales. Tutulungan ka naming malaman kung aling track ang pinaka-angkop sa iyong background at layunin." },
  },
  {
    num: "W2",
    days: { en: "Days 8–14", tl: "Araw 8–14" },
    en: { title: "Build the Skills", desc: "Hands-on training in your chosen track. Real tools, real tasks, and small projects you can actually show to a client or employer." },
    tl: { title: "Palakasin ang Iyong Kasanayan", desc: "Hands-on na pagsasanay sa iyong piniling track. Mga tool, mga gawain, at mga real na proyekto para mapatunayan na kaya mo ito." },
  },
  {
    num: "W3",
    days: { en: "Days 15–21", tl: "Araw 15–21" },
    en: { title: "Put Yourself Out There", desc: "Build your portfolio, set up your profile on platforms like Upwork or LinkedIn, and start reaching out to potential clients or employers." },
    tl: { title: "Ipakita ang Iyong Sarili", desc: "Gumawa ng portfolio, i-setup ang iyong profile sa mga platform tulad ng Upwork o LinkedIn, at magsimulang mag-outreach sa mga potensyal na kliyente o employer." },
  },
  {
    num: "W4",
    days: { en: "Days 22–30", tl: "Araw 22–30" },
    en: { title: "Get Paid", desc: "Close your first client or job, negotiate your rate in USD, and set up your finances so you are ready when the money comes in." },
    tl: { title: "Makuha ang Unang Bayad", desc: "Paano mag-close ng unang kliyente o trabaho, mag-negotiate ng rate sa USD, at i-setup ang iyong pananalapi para sa bagong kita." },
  },
];

const INCLUDES = [
  { en: "30 daily action checklists", tl: "30 araw-araw na action checklist" },
  { en: "Resume and LinkedIn templates", tl: "Mga template ng resume at LinkedIn" },
  { en: "Job board list (the ones that actually work)", tl: "Listahan ng job boards na talagang gumagana" },
  { en: "Interview Q&A practice guide", tl: "Gabay sa interview Q&A practice" },
  { en: "Salary negotiation scripts", tl: "Mga script sa salary negotiation" },
  { en: "Philippine tax and finance guide for remote workers", tl: "Gabay sa buwis at pananalapi para sa mga remote worker sa Pilipinas" },
  { en: "Private community group", tl: "Pribadong grupo ng komunidad" },
  { en: "Live Q&A with both founders", tl: "Live Q&A kasama ang parehong mga founder" },
];

// Light dashes around the book. Positions are % of the book box, lengths % of its width.
const SPARKS = [
  { x: -14, y: 70, angle: 28, length: 7 },
  { x: -19, y: 79, angle: 4, length: 10 },
  { x: 106, y: 9, angle: -28, length: 8 },
  { x: 109, y: 17, angle: 8, length: 6 },
  { x: 110, y: 82, angle: -40, length: 6 },
  { x: 104, y: 90, angle: 34, length: 8 },
];

const CHECK = "M3.5 8.5l3 3 6-7";

export default function Playbook() {
  return (
    <RevealSection className={styles.section} id="playbook">
      <div className="section-inner">
        <article className={styles.card} data-reveal="">
          <div className={styles.band}>
            <div className={styles.copy}>
              <span className={styles.badge}>★ <T en="Flagship Course" tl="Pangunahing Kurso" /></span>
              <h2>The 30-Day di6its Playbook</h2>
              <p><T en="A day-by-day action plan based on exactly what we did. Each day has one clear task. No overwhelm, no guesswork. Just the next step." tl="Isang araw-araw na action plan batay sa eksaktong ginawa namin. Bawat araw ay may isang malinaw na gawain. Walang kalituhan, walang hula-hula." /></p>
              <a href="#enroll" className={`btn btn-pill btn-light ${styles.cta}`}>
                <T en="Enroll in Batch 1 →" tl="Mag-enroll sa Batch 1 →" />
              </a>
            </div>
            <BookIllustration />
          </div>

          <div className={styles.inside}>
            <div>
              <h3 className={styles.label}><T en="Your 30 days" tl="Ang iyong 30 araw" /></h3>
              <ol className={styles.weeks}>
                {WEEKS.map(({ num, days, en, tl }) => (
                  <li key={num} className={styles.week}>
                    <span className={styles.weekNum}>{num}</span>
                    <div>
                      <span className={styles.days}><T en={days.en} tl={days.tl} /></span>
                      <h4><T en={en.title} tl={tl.title} /></h4>
                      <p><T en={en.desc} tl={tl.desc} /></p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className={styles.label}><T en="What's included" tl="Kasama sa kurso" /></h3>
              <ul className={styles.includes}>
                {INCLUDES.map((item) => (
                  <li key={item.en}>
                    <svg className={styles.check} viewBox="0 0 16 16" aria-hidden><path d={CHECK} /></svg>
                    <T en={item.en} tl={item.tl} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </RevealSection>
  );
}

/** Decorative: the playbook as a tilted hardcover, with a rising step chart on the cover. */
function BookIllustration() {
  return (
    <div className={styles.book} aria-hidden>
      <div className={styles.volume}>
        <div className={styles.pages} />
        <div className={styles.cover}>
          <span className={styles.wordmark}>di<span>6</span>its</span>
          <span className={styles.coverTitle}><span>The 30-Day</span> <span>Playbook</span></span>
          <span className={styles.coverTagline}>One clear task a day, from zero to your first client.</span>
          <svg className={styles.chart} viewBox="0 0 100 64">
            <defs>
              <linearGradient id="playbook-steps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" className={styles.stepsTop} />
                <stop offset="1" className={styles.stepsBottom} />
              </linearGradient>
            </defs>
            <path className={styles.stepsBack} d="M0 64V54h14v-7h14v-8h14v-9h14v-9h14v-9h12v52z" />
            <path className={styles.steps} d="M10 64V58h16v-8h16v-9h16v-10h16v-11h14v44z" />
            <path className={styles.arrow} d="M30 46l14-9 7 4 22-23M62 17h12v12" />
          </svg>
        </div>
      </div>
      {SPARKS.map(({ x, y, angle, length }) => (
        <span
          key={`${x}-${y}`}
          className={styles.spark}
          style={{ "--x": `${x}%`, "--y": `${y}%`, "--angle": `${angle}deg`, "--length": `${length}cqw` } as CSSProperties}
        />
      ))}
    </div>
  );
}

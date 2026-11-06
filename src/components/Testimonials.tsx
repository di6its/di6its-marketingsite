"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    initials: "JM",
    en: { quote: `"Finally a course that covers the whole process — not just the technical skills. The application and negotiation parts are where I really needed help."`, name: "Jan M.", role: "Former BPO team lead, Quezon City" },
    tl: { quote: `"Sa wakas, isang kurso na sumasaklaw sa buong proseso. Yung parte ng application at negotiation ang pinaka-kailangan ko."`, name: "Jan M.", role: "Dating BPO team lead, Quezon City" },
  },
  {
    initials: "RC",
    en: { quote: `"I was skeptical because so many things online turned out to be MLM. di6its is genuinely skill-based. Already recommended it to friends."`, name: "Rhea C.", role: "Finance background, Cebu" },
    tl: { quote: `"Kinatatakutan ko ang mga MLM. Dito sa di6its, skill-based talaga. Legit. Inirerekomenda ko ito sa lahat ng aking mga kaibigan."`, name: "Rhea C.", role: "Finance background, Cebu" },
  },
  {
    initials: "AL",
    en: { quote: `"Zero tech experience here. But their approach is step-by-step and easy to follow. Very excited to get started in Batch 1."`, name: "Angelo L.", role: "Customer service agent, Davao" },
    tl: { quote: `"Walang tech experience ako. Pero ang approach nila ay hakbang-hakbang, kaya ko sundan. Sobrang excited na ako sa Batch 1."`, name: "Angelo L.", role: "Customer service agent, Davao" },
  },
];

export default function Testimonials() {
  return (
    <section className="section section-tinted">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow"><T en="Early feedback" tl="Maagang feedback" /></p>
          <h2><T en="From people who took the waitlist seriously" tl="Mula sa mga taong sineseryoso ang waitlist" /></h2>
          <p><T en="These are early waitlist members who have been following our journey. Batch 1 is where the real results begin." tl="Ito ay maagang mga miyembro ng waitlist na sumusubaybay sa aming paglalakbay. Ang Batch 1 ay kung saan magsisimula ang mga tunay na resulta." /></p>
        </div>
        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.initials} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <blockquote><T en={r.en.quote} tl={r.tl.quote} /></blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.initials}</div>
                <div>
                  <div className={styles.name}><T en={r.en.name} tl={r.tl.name} /></div>
                  <div className={styles.role}><T en={r.en.role} tl={r.tl.role} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

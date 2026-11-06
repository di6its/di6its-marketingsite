"use client";

import { useState } from "react";
import { T } from "@/contexts/LangContext";
import styles from "./FAQ.module.css";

const items = [
  {
    en: { q: "Is this legit? Is this MLM?", a: "Legit. This is not MLM or networking. No recruiting anyone. You learn real, marketable skills, apply for real jobs at real foreign companies, and earn through your own work. We are teachers, not recruiters." },
    tl: { q: "Legit ba ito? Hindi ito MLM?", a: "Legit. Hindi ito MLM o networking. Walang recruit-recruit. Natututo ka ng tunay na mga kasanayan, nag-a-apply ka sa tunay na mga trabaho sa tunay na dayuhang kumpanya, at kumikita ka sa pamamagitan ng iyong sariling trabaho." },
  },
  {
    en: { q: "Do I need prior tech experience?", a: "Not required. The 30-Day Playbook is designed for people from non-tech backgrounds — customer service, finance, admin work. We start from zero. You are exactly who we built this for." },
    tl: { q: "Kailangan ba ng prior tech experience?", a: "Hindi required. Ang 30-Day Playbook ay dinisenyo para sa mga taong nagmumula sa hindi tech na background — customer service, finance, admin work. Nagsisimula kami mula sa simula." },
  },
  {
    en: { q: "Is getting a job guaranteed?", a: "No course can guarantee a job, no matter what anyone claims. What we guarantee is that you finish with a real resume, real skills, and a real application strategy. We make sure you are applying the right way." },
    tl: { q: "Garantisadong makakakuha ng trabaho?", a: "Walang kurso ang makakagarantiya ng trabaho. Ang aming garantiya ay magtatapos ka na may tunay na resume, tunay na kasanayan, at tunay na estratehiya sa pag-apply." },
  },
  {
    en: { q: "How much does the course cost?", a: "Pricing will be announced when Batch 1 opens. Join the waitlist for early access and the first batch rate, which will be lower than the regular price. No hidden charges, no upsells." },
    tl: { q: "Magkano ang kurso?", a: "Ang presyo ay ia-anunsyo kapag bumukas ang Batch 1. Sumali sa waitlist para makakuha ng maagang access at ang unang batch rate na mas mababa kaysa sa regular na presyo. Walang nakatagong singil, walang upsells." },
  },
  {
    en: { q: "Do I need a college degree?", a: "Most remote companies abroad do not require a Philippine college degree. What they look for is proof that you can do the work. That is what di6its helps you build." },
    tl: { q: "Kailangan ba ng college degree?", a: "Karamihan sa mga dayuhang kumpanya ay hindi nangangailangan ng Philippine college degree. Ang hinahanap nila ay patunay na kaya mong gawin ang trabaho. Iyon ang tinutulungan kang buuin ng di6its." },
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section section-tinted" id="faq">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow"><T en="Common questions" tl="Mga karaniwang tanong" /></p>
          <h2><T en="Honest answers to what you are probably thinking" tl="Tapat na mga sagot sa iyong mga katanungan" /></h2>
        </div>
        <div className={styles.list}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <button
                className={styles.question}
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span><T en={item.en.q} tl={item.tl.q} /></span>
                <span className={`${styles.caret} ${open === i ? styles.caretOpen : ""}`}>▼</span>
              </button>
              {open === i && (
                <div className={styles.answer}><T en={item.en.a} tl={item.tl.a} /></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Courses.module.css";

const pillars = [
  {
    icon: "👥",
    en: { title: "Virtual Assistant", desc: "Email management, scheduling, research, data entry, and tools like Notion, Trello, and Google Workspace. One of the most in-demand remote roles for Filipinos right now." },
    tl: { title: "Virtual Assistant", desc: "Email management, scheduling, research, data entry, at mga tool tulad ng Notion, Trello, at Google Workspace. Ang pinaka-in-demand na remote role para sa mga Pilipino." },
  },
  {
    icon: "⚙️",
    en: { title: "Low Code / No Code", desc: "Build real websites and apps using tools like Webflow, Bubble, and Zapier without writing code from scratch. Build real products for real clients and charge real rates." },
    tl: { title: "Low Code / No Code", desc: "Gumawa ng mga totoong website at app gamit ang mga tool tulad ng Webflow, Bubble, at Zapier nang hindi kailangang mag-coding mula simula. Magtayo ng real products para sa real clients." },
  },
  {
    icon: "📈",
    en: { title: "Marketing and Sales", desc: "Social media management, content writing, email marketing, running basic ads, and closing clients. These skills are always in demand from businesses worldwide." },
    tl: { title: "Marketing at Sales", desc: "Social media management, content writing, email marketing, basic ads, at kung paano mag-close ng mga kliyente. Ang mga kasanayang ito ay palaging hinahanap ng mga negosyo sa buong mundo." },
  },
  {
    icon: "🌐",
    en: { title: "Landing Clients and Jobs", desc: "Where to find clients and employers, how to pitch yourself, negotiate your rate, and keep the work coming. Covers your resume, LinkedIn, and portfolio for a global audience." },
    tl: { title: "Paano Makakuha ng Kliyente o Trabaho", desc: "Saan hanapin ang mga kliyente at employer, paano mag-pitch, mag-negotiate ng rate, at mapanatili ang trabaho. Kasama na ang resume, LinkedIn, at portfolio na para sa global na audience." },
  },
];

export default function Courses() {
  return (
    <section className="section section-tinted" id="courses">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow"><T en="What di6its teaches" tl="Ituturo ng di6its" /></p>
          <h2><T en="Three tracks. One goal: 6 digits." tl="Tatlong landas. Iisang layunin: 6 digits." /></h2>
          <p><T en="VA, low code/no code, or marketing and sales. Pick the track that fits you and we teach you everything you need to earn 6 digits a month." tl="VA, low code/no code, o marketing at sales. Pumili ng track na angkop sa iyo at ituturo namin ang lahat ng kailangan mo para kumita ng 6 digits sa isang buwan." /></p>
        </div>
        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.en.title} className={styles.pillar}>
              <div className={styles.icon}>{p.icon}</div>
              <h3><T en={p.en.title} tl={p.tl.title} /></h3>
              <p><T en={p.en.desc} tl={p.tl.desc} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

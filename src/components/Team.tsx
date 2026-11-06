"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Team.module.css";

const members = [
  {
    initials: "JV",
    name: "JV",
    en: { role: "Web Development", desc: "Builds websites and web apps for clients worldwide. Teaches you the low code and no code tools that let you create real products fast, even without a traditional dev background." },
    tl: { role: "Web Development", desc: "Nagtatayo ng mga website at web app para sa mga kliyente sa buong mundo. Magtuturo sa iyo ng low code at no code tools para makagawa ka ng real products nang mabilis." },
  },
  {
    initials: "Hz",
    name: "Hazel",
    en: { role: "SEO", desc: "Search engine optimization specialist who helps businesses rank on Google. Teaches you how to make websites more visible so clients get more traffic and more customers." },
    tl: { role: "SEO", desc: "Espesyalista sa search engine optimization na tumutulong sa mga negosyo na ma-rank sa Google. Ituturo niya sa iyo kung paano gawing mas makikita ang isang website." },
  },
  {
    initials: "Ar",
    name: "Arra",
    en: { role: "Social Media Marketing", desc: "Manages social media accounts for brands. Teaches content creation, community management, and how to turn being good at social media into a real income stream." },
    tl: { role: "Social Media Marketing", desc: "Nagma-manage ng social media accounts para sa mga brand. Magtuturo sa iyo ng content creation, community management, at kung paano gawing trabaho ang pagiging active sa social media." },
  },
  {
    initials: "Kk",
    name: "Kiko",
    en: { role: "Client Acquisition", desc: "Specialist in getting clients for freelancers and remote workers. Teaches outreach, pitching, and how to close deals at rates in USD without feeling awkward about it." },
    tl: { role: "Client Acquisition", desc: "Espesyalista sa pagkuha ng mga kliyente para sa mga freelancer at remote worker. Magtuturo sa iyo ng outreach, pitching, at kung paano mag-close ng deal." },
  },
];

export default function Team() {
  return (
    <section className="section section-tinted">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow"><T en="The Team" tl="Ang Aming Koponan" /></p>
          <h2><T en="Experts in their field, teaching from real experience." tl="Mga eksperto sa kanilang larangan, nagtuturo mula sa karanasan." /></h2>
          <p><T en="Every member of our team is actively working in their specialty. They are not teaching from books. They are teaching from actual work they do every day." tl="Ang bawat miyembro ng aming koponan ay aktibong nagtatrabaho sa kanilang specialty. Hindi sila nagtuturo mula sa mga libro kundi mula sa aktwal na trabaho." /></p>
        </div>
        <div className={styles.grid}>
          {members.map((m) => (
            <div key={m.initials} className={styles.card}>
              <div className={styles.mono}>{m.initials}</div>
              <h3>{m.name}</h3>
              <p className={styles.role}><T en={m.en.role} tl={m.tl.role} /></p>
              <p><T en={m.en.desc} tl={m.tl.desc} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

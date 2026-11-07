import { T } from "@/contexts/LangContext";
import LaptopIllustration from "./LaptopIllustration";
import RevealSection from "./RevealSection";
import styles from "./Courses.module.css";

// Line icons, drawn as strokes on a 24px grid.
const ICONS = {
  rocket: "M12 2.5c3 2.4 4.4 5.9 3.8 9.9L14 15h-4l-1.8-2.6C7.6 8.4 9 4.9 12 2.5zM12 8v.5M8.3 11.8 5.5 14.5V18l3.6-1.8M15.7 11.8l2.8 2.7V18l-3.6-1.8M10.5 18.5 12 21.5l1.5-3",
  code: "m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16",
  megaphone: "M4 9.5h3l7-4.5v14l-7-4.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM7 14.5l1.5 5h2.5L10 15M17.5 9.5a3.5 3.5 0 0 1 0 5",
  briefcase: "M4 7.5h16a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1zM9 7.5V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18",
};

// Each card: a one-line outcome, then the tools/skills as chips, so the card scans instead of reading as a paragraph.
const TRACKS = [
  {
    icon: ICONS.rocket,
    en: { title: "Virtual Assistant", desc: "Run email, schedules, research, and data for global clients. One of the most in-demand remote roles for Filipinos." },
    tl: { title: "Virtual Assistant", desc: "Mag-manage ng email, schedule, research, at data para sa global clients. Isa sa pinaka-in-demand na remote role para sa mga Pilipino." },
    tools: ["Notion", "Trello", "Workspace"],
  },
  {
    icon: ICONS.code,
    en: { title: "Low Code / No Code", desc: "Build real websites and apps for real clients without coding from scratch, and charge real rates." },
    tl: { title: "Low Code / No Code", desc: "Gumawa ng totoong website at app para sa totoong kliyente nang walang coding mula simula, at maningil ng totoong rate." },
    tools: ["Webflow", "Bubble", "Zapier"],
  },
  {
    icon: ICONS.megaphone,
    en: { title: "Marketing and Sales", desc: "Grow audiences and close clients. Skills businesses worldwide always need." },
    tl: { title: "Marketing at Sales", desc: "Palaguin ang audience at mag-close ng kliyente. Mga skill na laging hinahanap ng negosyo sa buong mundo." },
    tools: ["Social", "Content", "Ads"],
  },
  {
    icon: ICONS.briefcase,
    en: { title: "Landing Clients and Jobs", desc: "Find clients and employers, pitch yourself, negotiate your rate, and keep the work coming." },
    tl: { title: "Paano Makakuha ng Kliyente o Trabaho", desc: "Hanapin ang kliyente at employer, mag-pitch, mag-negotiate ng rate, at panatilihing tuloy ang trabaho." },
    tools: ["Resume", "LinkedIn", "Portfolio"],
    // Not a fourth track: the heading promises three, so this card is marked as shared by all of them.
    badge: { en: "Every track", tl: "Bawat track" },
  },
];

export default function Courses() {
  return (
    <RevealSection className={styles.section} id="courses">
      <div className="section-inner">
        <div className={styles.intro}>
          <div className={styles.heading}>
            <p className="eyebrow" data-reveal=""><T en="What di6its teaches" tl="Ituturo ng di6its" /></p>
            <h2 data-reveal=""><T en="Three tracks. One goal: 6 digits." tl="Tatlong landas. Iisang layunin: 6 digits." /></h2>
            <p data-reveal=""><T en="VA, low code/no code, or marketing and sales. Pick the track that fits you and we teach you everything you need to earn 6 digits a month." tl="VA, low code/no code, o marketing at sales. Pumili ng track na angkop sa iyo at ituturo namin ang lahat ng kailangan mo para kumita ng 6 digits sa isang buwan." /></p>
          </div>
          <LaptopIllustration />
        </div>
        <ul className={styles.grid}>
          {TRACKS.map(({ icon, en, tl, tools, badge }) => (
            <li key={en.title} className={styles.card} data-reveal="">
              <div className={styles.cardTop}>
                <span className={styles.tile} aria-hidden>
                  <svg viewBox="0 0 24 24"><path d={icon} /></svg>
                </span>
                {badge && <span className={styles.badge}><T en={badge.en} tl={badge.tl} /></span>}
              </div>
              <h3><T en={en.title} tl={tl.title} /></h3>
              <p><T en={en.desc} tl={tl.desc} /></p>
              <ul className={styles.tools}>
                {tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  );
}

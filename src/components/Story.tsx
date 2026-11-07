import { T } from "@/contexts/LangContext";
import IncomeCard from "./IncomeCard";
import RevealSection from "./RevealSection";
import styles from "./Story.module.css";

const HEADING_LINES = [
  { en: "Both started in a call center.", tl: "Parehong nagsimula sa call center." },
  { en: "Both remote workers now.", tl: "Parehong remote worker na ngayon." },
  { en: "Both actually living.", tl: "Parehong nabuhay na." },
];

export default function Story() {
  return (
    <RevealSection className={styles.section} id="about">
      <div className={`section-inner ${styles.grid}`}>
        <IncomeCard />
        <div className={styles.text}>
          <p className={styles.badge} data-reveal=""><T en="Our story" tl="Aming kwento" /></p>
          <h2 data-reveal="">
            {HEADING_LINES.map(({ en, tl }) => (
              // The trailing space keeps the sentences apart for screen readers.
              <span key={en} className={styles.line}><T en={en} tl={tl} />{" "}</span>
            ))}
          </h2>
          <p data-reveal="">
            <T
              en="We did not come from privilege. We slowly figured out how to apply to foreign companies and pass their interviews. Now we earn 6 digits a month, from home."
              tl="Hindi kami nagmula sa mayamang pamilya. Dahan-dahan naming natutunan kung paano mag-apply sa mga dayuhang kumpanya. Ngayon kumikita na kami ng 6 digits sa isang buwan — mula sa bahay."
            />
          </p>
          <a href="#enroll" className={`btn btn-gradient btn-pill ${styles.cta}`} data-reveal="">
            <T en="Start Your Journey" tl="Simulan ang Iyong Journey" />
            <span className={styles.arrow} aria-hidden>→</span>
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

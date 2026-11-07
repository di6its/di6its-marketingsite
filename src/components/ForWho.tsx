import { T } from "@/contexts/LangContext";
import RevealSection from "./RevealSection";
import TargetIllustration from "./TargetIllustration";
import styles from "./ForWho.module.css";

const AUDIENCES = [
  {
    // Headset: the call center background this audience is leaving.
    icon: "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z",
    en: {
      title: "Done with Corporate",
      desc: "Tired of the night shift grind? Earn more without sacrificing your life.",
    },
    tl: {
      title: "Pagod na sa Korporasyon",
      desc: "Pagod na sa night shift? Kumita nang higit nang hindi isinasakripisyo ang buhay mo.",
    },
  },
  {
    icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    en: {
      title: "Wanting to Stay Home",
      desc: "Be present while your kids grow up, without giving up your income.",
    },
    tl: {
      title: "Gusto Mong Manatili sa Tahanan",
      desc: "Maging kasama ng iyong mga anak habang lumalaki sila, nang hindi isinasakripisyo ang kita.",
    },
  },
  {
    icon: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
    en: {
      title: "Built to Explore",
      desc: "Dream of Siargao, Batanes, or beyond? Live anywhere, work from your laptop.",
    },
    tl: {
      title: "Gusto Mong Libutin ang Mundo",
      desc: "Pangarap ang Siargao, Batanes, o higit pa? Manirahan kahit saan, magtrabaho sa laptop.",
    },
  },
];

export default function ForWho() {
  return (
    <RevealSection className={styles.section} id="for-who">
      <div className="section-inner">
        <div className={styles.intro}>
          <div className={styles.heading}>
            <p className="eyebrow" data-reveal=""><T en="Who this is for" tl="Para kanino ito" /></p>
            <h2 data-reveal=""><T en="If you see yourself here, this is for you." tl="Kung isa ka sa mga ito, ikaw ang aming hinahanap." /></h2>
            <p data-reveal=""><T en="This is not for everyone. It is for people who are ready to change their lives through real work and real skills." tl="Hindi ito para sa lahat. Ito ay para sa mga taong handang baguhin ang kanilang buhay gamit ang trabaho at determinasyon." /></p>
          </div>
          <TargetIllustration />
        </div>
        <ul className={styles.grid}>
          {AUDIENCES.map(({ icon, en, tl }) => (
            <li key={en.title} className={styles.card} data-reveal="">
              <span className={styles.tile} aria-hidden>
                <svg className={styles.icon} viewBox="0 0 24 24"><path d={icon} /></svg>
              </span>
              <h3><T en={en.title} tl={tl.title} /></h3>
              <p><T en={en.desc} tl={tl.desc} /></p>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  );
}

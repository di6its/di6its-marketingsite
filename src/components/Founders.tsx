"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Founders.module.css";

export default function Founders() {
  return (
    <section className="section" id="founders">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow"><T en="Who we are" tl="Sino kami" /></p>
          <h2><T en="Not gurus. Just two Filipinos who figured it out — and are actually living it." tl="Hindi kami mga guro. Dalawang Pilipino lang na nakahanap ng paraan — at aktwal na nabubuhay ngayon." /></h2>
          <p><T en="We share the exact path we walked. We are not selling this as a dream — it is our actual life now." tl="Ibinabahagi namin ang eksaktong landas na nilakad namin. Hindi namin ito ibinebenta bilang pangarap — ito ang aming aktwal na buhay." /></p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.mono}>M</div>
            <h3>Marissa</h3>
            <p className={styles.role}><T en="Co-Founder · Software Developer" tl="Co-Founder · Software Developer" /></p>
            <p><T en="Started in customer service with a finance background. Taught herself programming and landed a remote developer role at a foreign company. Now she travels across the Philippines and to other countries, catches concerts she loves, and chooses where she works every day. She is building di6its to share that path with you." tl="Nagsimula sa customer service na may background sa finance. Natuto ng programming sa sarili at nakakuha ng remote developer role sa isang dayuhang kumpanya. Ngayon, nakakapaglakbay siya sa iba't ibang lalawigan ng Pilipinas at sa ibang bansa, nakakapanonood ng mga concert na mahal niya, at pinipili kung saan siya nagtratrabaho araw-araw." /></p>
            <div className={styles.tags}>
              {["Customer Service","Software Dev","Finance","Concert Goer","Traveler"].map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.mono}>Co</div>
            <h3><T en="Co-Founder" tl="Co-Founder" /></h3>
            <p className={styles.role}><T en="Co-Founder · QA Engineer" tl="Co-Founder · QA Engineer" /></p>
            <p><T en="Also from customer service and finance. No computer science degree, just curiosity and persistence. Now a QA engineer at a foreign tech company. Proof that you do not need a special background to get into global tech." tl="Mula rin sa customer service at finance. Walang computer science degree, puro kuryusidad at tiyaga. Ngayon ay QA engineer sa isang dayuhang tech company. Patunay na hindi mo kailangan ng espesyal na background para makapasok sa global tech workforce." /></p>
            <div className={styles.tags}>
              {["Customer Service","QA Engineering","Finance","Remote Work"].map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

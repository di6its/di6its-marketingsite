"use client";

import { T } from "@/contexts/LangContext";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className={styles.grid}>
          <div className={styles.barChart}>
            <div className={styles.chartHeading}><T en="Income comparison in the Philippines" tl="Paghahambing ng kita sa Pilipinas" /></div>
            <div className={styles.row}>
              <div className={styles.rowLabel}>
                <span><T en="Traditional local job" tl="Tradisyonal na trabaho" /></span>
                <strong>&#8369;18K / month</strong>
              </div>
              <div className={styles.track}><div className={`${styles.fill} ${styles.fillA}`} /></div>
            </div>
            <div className={styles.row}>
              <div className={styles.rowLabel}>
                <span>BPO / call center</span>
                <strong>&#8369;25K / month</strong>
              </div>
              <div className={styles.track}><div className={`${styles.fill} ${styles.fillB}`} /></div>
            </div>
            <div className={`${styles.row} ${styles.rowHighlight}`}>
              <div className={`${styles.rowLabel} ${styles.rowLabelHighlight}`}>
                <span><T en="Remote work (target)" tl="Remote na trabaho (layunin)" /></span>
                <strong>&#8369;100K+ / month</strong>
              </div>
              <div className={styles.track}><div className={`${styles.fill} ${styles.fillC}`} /></div>
            </div>
            <p className={styles.chartNote}><T en="Based on real market rates for remote roles for US and EU companies." tl="Batay sa tunay na market rate para sa remote na trabaho para sa mga kumpanya sa US at EU." /></p>
          </div>
          <div className={styles.text}>
            <p className="eyebrow"><T en="Our story" tl="Aming kwento" /></p>
            <h2><T en="Both started in a call center. Both remote workers now. Both actually living." tl="Parehong nagsimula sa call center. Parehong remote worker na ngayon. Parehong nabuhay na." /></h2>
            <p><T en="We did not come from privilege. BPO background, both of us. One a programmer, one a QA engineer. We slowly figured out how to apply to foreign companies and pass their interviews." tl="Hindi kami nagmula sa mayamang pamilya. BPO background namin. Isa programmer, isa QA engineer. Dahan-dahan naming natutunan kung paano mag-apply sa mga dayuhang kumpanya." /></p>
            <p><T en="Now we earn 6 digits a month, from home. We are free to travel across the Philippines and to other countries, catch concerts we love, and choose how we spend our time. That is what 6 digits really buys — not just things, but freedom." tl="Ngayon kumikita na kami ng 6 digits sa isang buwan — mula sa bahay. Libre na kami makadalo ng mga concert, maglakbay sa buong Pilipinas at ibang bansa, at mapili kung paano gugunahin ang aming oras." /></p>
            <a href="#courses" className="btn btn-grape"><T en="See the courses ↓" tl="Tingnan ang mga kurso" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

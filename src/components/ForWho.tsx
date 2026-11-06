"use client";

import { T } from "@/contexts/LangContext";
import styles from "./ForWho.module.css";

export default function ForWho() {
  return (
    <section className="section section-tinted" id="for-who">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow"><T en="Who this is for" tl="Para kanino ito" /></p>
          <h2><T en="If you see yourself here, this is for you." tl="Kung isa ka sa mga ito, ikaw ang aming hinahanap." /></h2>
          <p><T en="This is not for everyone. It is for people who are ready to change their lives through real work and real skills." tl="Hindi ito para sa lahat. Ito ay para sa mga taong handang baguhin ang kanilang buhay gamit ang trabaho at determinasyon." /></p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.emoji}>📞</span>
            <h3><T en="Done with Corporate" tl="Pagod na sa Korporasyon" /></h3>
            <p><T en="You have spent years in a call center or office. You are tired of the night shift grind, holiday work, and being treated like a number. You want to earn more without sacrificing your life." tl="Nagtrabaho ka sa call center o opisina ng maraming taon. Ikaw ay tired na sa night shift, holiday work, at pagiging numero lang. Gusto mong kumita nang higit nang hindi naisakripisyo ang iyong buhay." /></p>
          </div>
          <div className={styles.card}>
            <span className={styles.emoji}>👨‍👩‍👧‍👦</span>
            <h3><T en="Wanting to Stay Home" tl="Gusto Mong Manatili sa Tahanan" /></h3>
            <p><T en="You are a mom or dad who wants to be present while your kids grow up, without giving up your income. Remote work is the answer, and di6its is the way to get there." tl="Ikaw ay ina o ama na gustong maging kasama ng iyong mga anak habang lumalaki sila, nang hindi isinasakripisyo ang kita. Ang remote work ay ang sagot, at ang di6its ay ang daan." /></p>
          </div>
          <div className={styles.card}>
            <span className={styles.emoji}>🌍</span>
            <h3><T en="Built to Explore" tl="Gusto Mong Libutin ang Mundo" /></h3>
            <p><T en="You have always dreamed of working from Siargao, Batanes, or anywhere in the world. A 6-digit remote income gives you that freedom — live anywhere, work from your laptop." tl="Palagi kang nangangarap na magtrabaho mula sa Siargao, Batanes, o kahit saan sa mundo. Ang 6-digit na remote income ay nagbibigay sa iyo ng kalayaang iyon — manirahan kahit saan at magtrabaho sa iyong laptop." /></p>
          </div>
        </div>
      </div>
    </section>
  );
}

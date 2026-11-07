import type { CSSProperties } from "react";
import { T } from "@/contexts/LangContext";
import styles from "./IncomeCard.module.css";

type Bilingual = { en: string; tl: string };
type Stage = Bilingual & { share?: number };

// Every row is the same person at two moments. `share` is the bar length against the ₱100K target;
// rows without one are text-only. Only the pay figures come from the market data — the other
// rows restate what the story copy beside this card already says.
const ROWS: { label: Bilingual; then: Stage; now: Stage }[] = [
  {
    label: { en: "Monthly pay", tl: "Buwanang kita" },
    then: { en: "₱25K", tl: "₱25K", share: 25 },
    now: { en: "₱100K+", tl: "₱100K+", share: 100 },
  },
  {
    label: { en: "Where you work", tl: "Saan nagtatrabaho" },
    then: { en: "Call center", tl: "Call center" },
    now: { en: "From home", tl: "Mula sa bahay" },
  },
  {
    label: { en: "Who you work for", tl: "Pinagtatrabahuhan" },
    then: { en: "BPO / call center", tl: "BPO / call center" },
    // Non-breaking spaces keep "US & EU" together when the value wraps on narrow screens.
    now: { en: "US\u00A0&\u00A0EU companies", tl: "Mga kumpanya sa US\u00A0at\u00A0EU" },
  },
];

const VIEWS = [
  { value: "then", en: "Then", tl: "Noon" },
  { value: "now", en: "Now", tl: "Ngayon" },
] as const;

// Native radios drive the whole card through :has(), so it stays a server component with no JS.
export default function IncomeCard() {
  return (
    <div className={styles.stage} data-reveal="">
      <figure className={styles.card}>
        <figcaption className={styles.title}>
          <span className={styles.tile} aria-hidden>
            <svg viewBox="0 0 24 24"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" /></svg>
          </span>
          <T en="Where we started vs. now" tl="Saan kami nagsimula at ngayon" />
        </figcaption>

        <fieldset className={styles.switch}>
          <legend className={styles.srOnly}><T en="Compare then and now" tl="Ihambing ang noon at ngayon" /></legend>
          {VIEWS.map(({ value, en, tl }) => (
            <label key={value} className={styles.option}>
              <input type="radio" name="income-view" value={value} defaultChecked={value === "then"} />
              <span><T en={en} tl={tl} /></span>
            </label>
          ))}
        </fieldset>

        <dl className={styles.list}>
          {ROWS.map(({ label, then, now }, index) => (
            <div
              key={label.en}
              className={`${styles.row} ${then.share ? styles.bar : ""}`}
              style={{ "--then": then.share, "--now": now.share, "--index": index } as CSSProperties}
            >
              <dt><T en={label.en} tl={label.tl} /></dt>
              <dd>
                <span className={styles.then}><T en={then.en} tl={then.tl} /></span>
                <span className={styles.now}><T en={now.en} tl={now.tl} /></span>
              </dd>
            </div>
          ))}
        </dl>

        <p className={styles.note}>
          <T
            en="Based on real market rates for remote roles for US and EU companies."
            tl="Batay sa tunay na market rate para sa remote na trabaho para sa mga kumpanya sa US at EU."
          />
        </p>
      </figure>
    </div>
  );
}

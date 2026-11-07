import { T } from "@/contexts/LangContext";
import styles from "./FeatureStrip.module.css";

type Feature = { en: string; tl: string };

const FEATURES: Feature[] = [
  { en: "No MLM. No pyramids.", tl: "Walang MLM. Walang pyramiding." },
  { en: "Skills, not schemes.", tl: "Kasanayan, hindi iskema." },
  { en: "You earn through your own work.", tl: "Kumikita ka sa sarili mong trabaho." },
  { en: "No fake urgency or hidden fees.", tl: "Walang pekeng urgency o nakatagong bayad." },
];

/*
 * The track loops by shifting half its width, so the count must be even (half = whole groups)
 * and half the copies must outspan the widest viewport, or empty space shows before the loop.
 */
const COPIES = 6;

export default function FeatureStrip() {
  return (
    <div className={styles.band}>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {Array.from({ length: COPIES }, (_, copy) => (
            // Only the first copy is exposed, so screen readers announce the list once.
            <ul key={copy} className={styles.list} aria-hidden={copy > 0 || undefined}>
              {FEATURES.map(({ en, tl }) => (
                <li key={en} className={styles.item}>
                  <span className={styles.tile} aria-hidden>
                    {/* Stroked with currentColor so it inherits the label colour. */}
                    <svg className={styles.icon} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span className={styles.label}><T en={en} tl={tl} /></span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

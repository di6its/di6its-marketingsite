import type { CSSProperties } from "react";
import styles from "./LaptopIllustration.module.css";

// A 3/4 view traced on a 1460 x 660 stage: the lid stands on the deck's back edge, the deck's front corner points at the viewer.
const LID = "M522 42L1108 72L1056 490L446 428Z";
const SCREEN = "M536 58L1093 86L1044 474L460 416Z";
const DECK = "M450 425L1040 502L720 602L130 500Z";
const LIP = "M130 500L720 602L1040 502L1034 522L720 624L138 516Z";
const KEYS = "M459 438L967 506L845 544L338 467Z";
const PAD = "M489 503L630 525L528 554L386 530Z";
const DECK_EDGE = "M130 500L720 602L1040 502";

// Icons on a 24px grid: `solid` is filled white; `line` is stroked white, or knocked out of the solid when there is one.
const TILES = [
  { solid: "M4.5 14.5a1.5 1.5 0 0 1 3 0V19h-3zM10.5 10.5a1.5 1.5 0 0 1 3 0V19h-3zM16.5 6a1.5 1.5 0 0 1 3 0v13h-3z", line: "", x: 12.7, y: 11.4, size: 12.7, delay: 0 },
  { solid: "", line: "M4.5 19v-3M9 19v-6M12.5 17l3-5 2.5 2L21 7.5M17.5 7.5H21V11", x: 82.2, y: 5.3, size: 13, delay: -2 },
  { solid: "M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z", line: "M8 12.5l3 3 5.5-6", x: 76.7, y: 55.3, size: 13.7, delay: -4 },
];

/** Decorative: a laptop showing the wordmark in a violet haze, with icon tiles floating around it. */
export default function LaptopIllustration() {
  return (
    <div className={styles.stage} data-reveal="" aria-hidden>
      <svg className={styles.laptop} viewBox="0 0 1460 660">
        <defs>
          <linearGradient id="laptop-screen" x1="0" y1="0" x2="0.6" y2="0.8">
            <stop offset="0" className={styles.screenHi} />
            <stop offset="0.3" className={styles.screenMid} />
            <stop offset="0.55" className={styles.screenLo} />
          </linearGradient>
          <linearGradient id="laptop-deck" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0" className={styles.metalHi} />
            <stop offset="1" className={styles.metalLo} />
          </linearGradient>
        </defs>
        <path className={styles.lid} d={LID} />
        <path d={SCREEN} fill="url(#laptop-screen)" />
        <text className={styles.wordmark} transform="translate(765 300) rotate(3) skewX(-10)">
          di<tspan className={styles.accent}>6</tspan>its
        </text>
        <path className={styles.lip} d={LIP} />
        <path d={DECK} fill="url(#laptop-deck)" />
        <path className={styles.keys} d={KEYS} />
        <path className={styles.pad} d={PAD} />
        <path className={styles.edge} d={DECK_EDGE} />
      </svg>
      {TILES.map(({ solid, line, x, y, size, delay }) => (
        <span
          key={x}
          className={styles.tile}
          style={{ "--x": `${x}%`, "--y": `${y}%`, "--size": `${size}cqw`, "--delay": `${delay}s` } as CSSProperties}
        >
          <svg viewBox="0 0 24 24">
            {solid && <path className={styles.solid} d={solid} />}
            {line && <path className={styles.line} d={line} />}
          </svg>
        </span>
      ))}
    </div>
  );
}

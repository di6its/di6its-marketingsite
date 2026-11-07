"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./TargetIllustration.module.css";

const TROPHY = "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z";
const CHART = "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z";
const HEART = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

// Positions are % of the stage and sizes are % of its width, so the scene scales as one piece.
// Depth is how far a tile drifts with the pointer, so nearer tiles move more than the board.
const TILES = [
  { icon: TROPHY, x: 0.5, y: 21, size: 19.5, tilt: -8, delay: 0, depth: 3 },
  { icon: CHART, x: 82, y: 10, size: 16.5, tilt: 10, delay: -1.5, depth: 2 },
  { icon: TROPHY, x: 15, y: 67, size: 18, tilt: -12, delay: -3, depth: 2.5 },
  { icon: HEART, x: 76.5, y: 59, size: 18, tilt: 10, delay: -4.5, depth: 3.5 },
];

const PARALLAX_QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const clampUnit = (value: number) => Math.min(Math.max(value, -1), 1);

export default function TargetIllustration() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const section = stage?.closest("section");
    if (!stage || !section || !matchMedia(PARALLAX_QUERY).matches) return;

    // Listens on the section so the scene reacts before the pointer reaches it.
    const follow = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const { left, top, width, height } = stage.getBoundingClientRect();
      stage.style.setProperty("--pointer-x", String(clampUnit((event.clientX - left) / width * 2 - 1)));
      stage.style.setProperty("--pointer-y", String(clampUnit((event.clientY - top) / height * 2 - 1)));
    };
    const settle = () => {
      stage.style.removeProperty("--pointer-x");
      stage.style.removeProperty("--pointer-y");
    };

    section.addEventListener("pointermove", follow, { passive: true });
    section.addEventListener("pointerleave", settle);
    return () => {
      section.removeEventListener("pointermove", follow);
      section.removeEventListener("pointerleave", settle);
    };
  }, []);

  return (
    <div ref={stageRef} className={styles.stage} data-reveal="" aria-hidden>
      {TILES.map(({ icon, x, y, size, tilt, delay, depth }, index) => (
        <span
          key={index}
          className={styles.tile}
          style={{
            "--x": `${x}%`,
            "--y": `${y}%`,
            "--size": `${size}cqw`,
            "--tilt": `${tilt}deg`,
            "--delay": `${delay}s`,
            "--depth": depth,
            "--index": index,
          } as CSSProperties}
        >
          <svg viewBox="0 0 24 24"><path d={icon} /></svg>
        </span>
      ))}
      <svg className={styles.target} viewBox="0 0 232 216">
        <defs>
          <linearGradient id="target-rim" x1="0.25" y1="0" x2="0.7" y2="1">
            <stop offset="0" stopColor="var(--illo-rim-hi)" />
            <stop offset="0.5" stopColor="var(--illo-rim)" />
            <stop offset="1" stopColor="var(--illo-rim-lo)" />
          </linearGradient>
          <linearGradient id="target-edge" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="var(--illo-rim-lo)" />
            <stop offset="1" stopColor="var(--illo-edge)" />
          </linearGradient>
          <linearGradient id="target-face" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="var(--illo-face)" />
            <stop offset="1" stopColor="var(--illo-mist)" />
          </linearGradient>
          <radialGradient id="target-eye" cx="0.38" cy="0.32" r="0.8">
            <stop offset="0" stopColor="var(--illo-rim-hi)" />
            <stop offset="1" stopColor="var(--illo-rim-lo)" />
          </radialGradient>
          <linearGradient id="target-sheen" x1="0.2" y1="0" x2="0.5" y2="0.6">
            <stop offset="0" stopColor="var(--illo-face)" stopOpacity="0.45" />
            <stop offset="1" stopColor="var(--illo-face)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="target-feather" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0" stopColor="var(--illo-rim-hi)" />
            <stop offset="1" stopColor="var(--illo-feather)" />
          </linearGradient>
        </defs>

        {/* The offset disc underneath reads as the board's thickness. */}
        <g className={styles.board}>
          <circle cx="97" cy="121" r="91" fill="url(#target-edge)" />
          <circle cx="100" cy="116" r="89.25" fill="url(#target-rim)" stroke="url(#target-sheen)" strokeWidth="1.5" />
          <circle cx="100" cy="116" r="67" fill="url(#target-face)" />
          <circle cx="100" cy="116" r="49" fill="url(#target-rim)" />
          <circle cx="100" cy="116" r="31" fill="url(#target-face)" />
          <circle cx="100" cy="116" r="15" fill="url(#target-eye)" />
        </g>

        {/* Hover gets its own group: sharing the landing's animation list would replay it on mouse-out. */}
        <g className={styles.arrow}>
          <g className={styles.arrowHover}>
            <g transform="translate(102 114) rotate(-33)">
              <path className={styles.shaftShadow} d="M3 4 92 6.5v5.4z" />
              <path fill="var(--illo-edge)" d="M0-1 92-2.8v5.6L0 1z" />
              <path fill="url(#target-feather)" d="M86-1.5 106-19l32-1-14 20z" />
              <path fill="var(--illo-feather)" d="M86 1.5 106 19l32 1-14-20z" />
              <path fill="var(--illo-rim)" d="m84 0 40-1.2v2.4z" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

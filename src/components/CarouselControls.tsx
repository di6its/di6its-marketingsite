"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LangContext";
import styles from "./CarouselControls.module.css";

type Label = { en: string; tl: string };

type CarouselControlsProps = {
  /** id of the horizontal scroll-snap track these arrows drive. */
  trackId: string;
  prevLabel: Label;
  nextLabel: Label;
  className?: string;
};

// Fractional scroll positions can stop a hair short of either end.
const EDGE_TOLERANCE = 1;
const ARROW = "M5 12h14M13 6l6 6-6 6";

/**
 * Prev/next arrows for a scroll-snap track. Each press moves one card; an arrow is aria-disabled
 * (not disabled) at its end, so keyboard focus stays on it instead of dropping to the page.
 */
export default function CarouselControls({ trackId, prevLabel, nextLabel, className }: CarouselControlsProps) {
  const { lang } = useLang();
  const [edges, setEdges] = useState({ atStart: true, atEnd: true });

  useEffect(() => {
    const track = document.getElementById(trackId);
    if (!track) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      const atStart = scrollLeft <= EDGE_TOLERANCE;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - EDGE_TOLERANCE;
      setEdges((prev) => (prev.atStart === atStart && prev.atEnd === atEnd ? prev : { atStart, atEnd }));
    };

    // The observer also reports once on observe(), which sets the initial state.
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, [trackId]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = document.getElementById(trackId);
    const card = track?.firstElementChild;
    if (!track || !card) return;
    const step = card.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0);
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * step, behavior: reduceMotion ? "instant" : "smooth" });
  };

  const buttons = [
    { direction: -1 as const, label: prevLabel, isDisabled: edges.atStart },
    { direction: 1 as const, label: nextLabel, isDisabled: edges.atEnd },
  ];

  return (
    <div className={`${styles.controls} ${className ?? ""}`}>
      {buttons.map(({ direction, label, isDisabled }) => (
        <button
          key={direction}
          type="button"
          className={styles.button}
          aria-label={lang === "tl" ? label.tl : label.en}
          aria-controls={trackId}
          aria-disabled={isDisabled}
          onClick={() => !isDisabled && scrollByCard(direction)}
        >
          <svg className={direction < 0 ? styles.flip : undefined} viewBox="0 0 24 24" aria-hidden>
            <path d={ARROW} />
          </svg>
        </button>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./RevealSection.module.css";

// The trigger line sits above the fold, so elements have started moving by the time they're read.
const TRIGGER_MARGIN = "0px 0px -12% 0px";

type RevealSectionProps = {
  id: string;
  className: string;
  children: ReactNode;
};

/**
 * A <section> that reveals its [data-reveal] descendants on scroll. They render visible, and only
 * the observer's first report hides the ones still below the fold. So with no JS, a silent
 * observer or reduced motion, nothing is ever hidden and nothing on screen flashes.
 */
export default function RevealSection({ id, className, children }: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting, boundingClientRect } of entries) {
        const element = target as HTMLElement;
        if (element.dataset.reveal === "hidden") {
          if (isIntersecting) {
            element.dataset.reveal = "shown";
            observer.unobserve(element);
          }
        } else if (boundingClientRect.top >= innerHeight) {
          element.dataset.reveal = "hidden";
        } else {
          observer.unobserve(element); // Already on screen or scrolled past: leave it alone.
        }
      }
    }, { rootMargin: TRIGGER_MARGIN });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={`${styles.scope} ${className}`}>
      {children}
    </section>
  );
}

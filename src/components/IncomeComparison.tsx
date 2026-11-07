"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { T } from "@/contexts/LangContext";
import styles from "./IncomeComparison.module.css";

const INCOMES = [
  { en: "Traditional office job", tl: "Tradisyonal na trabaho", amount: 18000, isMinimum: false, tone: "neutral" },
  { en: "BPO / call center", tl: "BPO / call center", amount: 25000, isMinimum: false, tone: "neutral" },
  { en: "Freelance online", tl: "Freelance online", amount: 60000, isMinimum: true, tone: "blue" },
  { en: "Remote (foreign company)", tl: "Remote (dayuhang kumpanya)", amount: 100000, isMinimum: true, tone: "papaya" },
] as const;

const TOP_AMOUNT = Math.max(...INCOMES.map(({ amount }) => amount));

const STAGGER_MS = 180;
const CLIMB_MS = 900;
// Neither site font has tabular figures. Whole thousands keep ",000" still at the right edge.
const COUNT_STEP = 1000;
const VISIBLE_SHARE_TO_START = 0.4;

// A fixed locale keeps server and client output identical.
const formatPeso = (amount: number, isMinimum: boolean) =>
  `₱${amount.toLocaleString("en-US")}${isMinimum ? "+" : ""}`;

/** Each figure climbs from the previous row's amount, so the rows read as one rising line. */
function renderClimbFrame(counters: NodeListOf<HTMLElement>, elapsedMs: number) {
  counters.forEach((counter, index) => {
    const { amount, isMinimum } = INCOMES[index];
    const from = index === 0 ? 0 : INCOMES[index - 1].amount;
    const progress = Math.min(Math.max((elapsedMs - index * STAGGER_MS) / CLIMB_MS, 0), 1);
    const eased = 1 - (1 - progress) ** 3;
    const value = Math.round((from + (amount - from) * eased) / COUNT_STEP) * COUNT_STEP;
    counter.textContent = formatPeso(value, isMinimum);
  });
}

export default function IncomeComparison() {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const moveSheen = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const { left, top } = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - top}px`);
    };
    card.addEventListener("pointermove", moveSheen, { passive: true });
    const stopSheen = () => card.removeEventListener("pointermove", moveSheen);

    // CSS only hides rows when the climb can play. Visible rows mean reduced motion,
    // an older browser, or JS that arrived after the safety net, so leave them alone.
    const firstRow = card.querySelector(`.${styles.row}`);
    if (!firstRow || getComputedStyle(firstRow).opacity !== "0") {
      card.dataset.reveal = "done";
      return stopSheen;
    }

    card.dataset.reveal = "waiting";
    const counters = card.querySelectorAll<HTMLElement>(`.${styles.counter}`);
    const totalMs = (INCOMES.length - 1) * STAGGER_MS + CLIMB_MS;
    let frame = 0;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const startedAt = performance.now();
      const tick = (now: number) => {
        const elapsedMs = now - startedAt;
        if (elapsedMs >= totalMs) {
          card.dataset.reveal = "done";
          return;
        }
        renderClimbFrame(counters, elapsedMs);
        frame = requestAnimationFrame(tick);
      };
      renderClimbFrame(counters, 0);
      card.dataset.reveal = "playing";
      frame = requestAnimationFrame(tick);
    }, { threshold: VISIBLE_SHARE_TO_START });
    observer.observe(card);

    return () => {
      stopSheen();
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.stage}>
      <figure
        ref={cardRef}
        className={styles.card}
        style={{ "--stagger": `${STAGGER_MS}ms`, "--climb": `${CLIMB_MS}ms` } as CSSProperties}
      >
        <figcaption className={styles.title}>
          <T en="Monthly income comparison" tl="Paghahambing ng buwanang kita" />
        </figcaption>
        <dl className={styles.list}>
          {INCOMES.map(({ en, tl, amount, isMinimum, tone }, index) => (
            <div
              key={en}
              className={`${styles.row} ${styles[tone]}`}
              // Bar length is the row's share of the top figure; "+" rows use their stated minimum.
              style={{ "--share": `${(amount / TOP_AMOUNT) * 100}%`, "--index": index } as CSSProperties}
            >
              <dt className={styles.label}><T en={en} tl={tl} /></dt>
              <dd className={styles.amount}>
                <span className={styles.figure}>{formatPeso(amount, isMinimum)}</span>
                {/* The real figure above never changes. This overlay shows the climb and stays
                    empty in the server HTML, so assistive tech only ever gets the exact amount. */}
                <span className={styles.counter} aria-hidden />
              </dd>
            </div>
          ))}
        </dl>
        <p className={styles.note}>
          <T
            en="Typical market rates for remote roles in customer service, QA, and development."
            tl="Batay sa karaniwang rate para sa remote na trabaho sa customer service, QA, at development."
          />
        </p>
      </figure>
    </div>
  );
}

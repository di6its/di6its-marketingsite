import { T } from "@/contexts/LangContext";
import CarouselControls from "./CarouselControls";
import RevealSection from "./RevealSection";
import styles from "./Testimonials.module.css";

const TITLE_ID = "testimonials-title";
const TRACK_ID = "testimonials-track";

const REVIEWS = [
  {
    initials: "JM",
    en: { quote: `"Finally a course that covers the whole process — not just the technical skills. The application and negotiation parts are where I really needed help."`, name: "Jan M.", role: "Former BPO team lead, Quezon City" },
    tl: { quote: `"Sa wakas, isang kurso na sumasaklaw sa buong proseso. Yung parte ng application at negotiation ang pinaka-kailangan ko."`, name: "Jan M.", role: "Dating BPO team lead, Quezon City" },
  },
  {
    initials: "RC",
    en: { quote: `"I was skeptical because so many things online turned out to be MLM. di6its is genuinely skill-based. Already recommended it to friends."`, name: "Rhea C.", role: "Finance background, Cebu" },
    tl: { quote: `"Kinatatakutan ko ang mga MLM. Dito sa di6its, skill-based talaga. Legit. Inirerekomenda ko ito sa lahat ng aking mga kaibigan."`, name: "Rhea C.", role: "Finance background, Cebu" },
  },
  {
    initials: "AL",
    en: { quote: `"Zero tech experience here. But their approach is step-by-step and easy to follow. Very excited to get started in Batch 1."`, name: "Angelo L.", role: "Customer service agent, Davao" },
    tl: { quote: `"Walang tech experience ako. Pero ang approach nila ay hakbang-hakbang, kaya ko sundan. Sobrang excited na ako sa Batch 1."`, name: "Angelo L.", role: "Customer service agent, Davao" },
  },
  {
    initials: "MD",
    en: { quote: `"The roadmap finally made sense to me. I stopped jumping between random tutorials and just followed the steps."`, name: "Mark D.", role: "Virtual assistant, Laguna" },
    tl: { quote: `"Sa wakas may malinaw na roadmap. Hindi na ako kumakaway sa iba't ibang tutorial, sinusunod ko na lang ang mga hakbang."`, name: "Mark D.", role: "Virtual assistant, Laguna" },
  },
  {
    initials: "LP",
    en: { quote: `"I almost gave up learning tech skills on my own. Seeing the full curriculum before Batch 1 gave me the confidence to commit."`, name: "Liza P.", role: "Stay-at-home mom, Iloilo" },
    tl: { quote: `"Muntik na akong sumuko sa pag-aaral ng tech skills nang mag-isa. Nang makita ko ang buong curriculum bago ang Batch 1, nagkaroon ako ng tiwala na magsimula."`, name: "Liza P.", role: "Stay-at-home mom, Iloilo" },
  },
  {
    initials: "CR",
    en: { quote: `"Signed up expecting another generic course. The breakdown of each module convinced me this one is different."`, name: "Carlo R.", role: "Call center agent, Baguio" },
    tl: { quote: `"Sumali ako akala ko regular na kurso lang. Ang breakdown ng bawat module ang kumbinsi sa akin na iba ito."`, name: "Carlo R.", role: "Call center agent, Baguio" },
  },
];

export default function Testimonials() {
  return (
    <RevealSection className={styles.section} id="testimonials">
      <div className="section-inner">
        <header className={styles.header}>
          <p className={`eyebrow ${styles.eyebrow}`} data-reveal=""><T en="Early feedback" tl="Maagang feedback" /></p>
          <h2 id={TITLE_ID} className={styles.title} data-reveal=""><T en="From people who took the waitlist seriously" tl="Mula sa mga taong sineseryoso ang waitlist" /></h2>
          <p className={styles.lede} data-reveal=""><T en="These are early waitlist members who have been following our journey. Batch 1 is where the real results begin." tl="Ito ay maagang mga miyembro ng waitlist na sumusubaybay sa aming paglalakbay. Ang Batch 1 ay kung saan magsisimula ang mga tunay na resulta." /></p>
          <CarouselControls
            className={styles.arrows}
            trackId={TRACK_ID}
            prevLabel={{ en: "Previous testimonial", tl: "Nakaraang testimonial" }}
            nextLabel={{ en: "Next testimonial", tl: "Susunod na testimonial" }}
          />
        </header>

        {/* Focusable so keyboard users can scroll it directly; named by the heading. */}
        <ul id={TRACK_ID} className={styles.track} aria-labelledby={TITLE_ID} tabIndex={0}>
          {REVIEWS.map(({ initials, en, tl }) => (
            <li key={initials} className={styles.card} data-reveal="">
              <figure className={styles.figure}>
                <span className={styles.mark} aria-hidden />
                <blockquote className={styles.quote}>
                  <p><T en={en.quote} tl={tl.quote} /></p>
                </blockquote>
                <figcaption className={styles.author}>
                  <span className={styles.avatar} aria-hidden>{initials}</span>
                  <span className={styles.name}><T en={en.name} tl={tl.name} /></span>{" "}
                  <span className={styles.role}><T en={en.role} tl={tl.role} /></span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  );
}

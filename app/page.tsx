import styles from "./page.module.css";

const stars = [
  { top: "6%", left: "12%", delay: 0 },
  { top: "18%", left: "28%", delay: 1.2 },
  { top: "12%", left: "56%", delay: 0.6 },
  { top: "8%", left: "78%", delay: 2.3 },
  { top: "16%", left: "90%", delay: 1.7 },
  { top: "26%", left: "8%", delay: 2.9 },
  { top: "32%", left: "20%", delay: 0.8 },
  { top: "30%", left: "42%", delay: 3.5 },
  { top: "24%", left: "62%", delay: 1.4 },
  { top: "28%", left: "84%", delay: 0.2 },
  { top: "42%", left: "12%", delay: 4.1 },
  { top: "48%", left: "30%", delay: 1.9 },
  { top: "46%", left: "52%", delay: 3.2 },
  { top: "44%", left: "74%", delay: 2.6 },
  { top: "54%", left: "88%", delay: 1.1 },
  { top: "62%", left: "18%", delay: 3.9 },
  { top: "66%", left: "38%", delay: 0.5 },
  { top: "64%", left: "58%", delay: 2.7 },
  { top: "70%", left: "72%", delay: 1.5 },
  { top: "78%", left: "86%", delay: 4.5 },
  { top: "82%", left: "26%", delay: 3.1 },
  { top: "84%", left: "46%", delay: 2.2 },
  { top: "88%", left: "64%", delay: 0.9 },
  { top: "92%", left: "80%", delay: 1.8 }
];

export default function Page() {
  return (
    <main className={styles.scene}>
      <div className={styles.constellation} aria-hidden>
        {stars.map((star, index) => (
          <span
            key={index}
            className={styles.star}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: `${star.delay}s`,
              animationDuration: `${6 + (index % 5)}s`
            }}
          />
        ))}
      </div>

      <div className={styles.aura} aria-hidden />

      <div className={styles.peak}>
        <div className={styles.trident} aria-hidden />
        <div className={styles.silhouette} aria-hidden />
        <div className={styles.pilgrim} aria-hidden />
        <div className={styles.lotus} aria-hidden />
      </div>

      <div className={styles.content}>
        <span className={styles.mantra}>Om Namah Shivaya</span>
        <h1 className={styles.title}>At the Feet of Mahadeva</h1>
        <p className={styles.subtitle}>
          A solitary pilgrim rests upon sacred Kailash, hands folded in reverence as
          the cosmic stillness of Lord Shiva envelops the summit. Aurora-soft light
          crowns the silent mountain, whispering of timeless devotion and inner
          awakening.
        </p>
      </div>

      <section className={styles.panels} aria-label="Sacred tableau details">
        <article className={styles.panel}>
          <span className={styles.panelTitle}>Kailash</span>
          <p className={styles.panelCopy}>
            Mythic alabaster cliffs rise into the stars, etched with glacial veins and
            veiled in moonlit cloud. The summit glows like a celestial lamp, anchoring
            heaven and earth in unbroken silence.
          </p>
        </article>
        <article className={styles.panel}>
          <span className={styles.panelTitle}>Lord Shiva</span>
          <p className={styles.panelCopy}>
            The Great Ascetic watches in tranquil grace, trident held aloft as an emblem
            of boundless guardianship. His presence hums through the rarefied air like a
            cosmic mantra, serene yet immeasurable.
          </p>
        </article>
        <article className={styles.panel}>
          <span className={styles.panelTitle}>Pilgrim</span>
          <p className={styles.panelCopy}>
            Draped in warm saffron hues, the seeker sits in surrender, eyes closed,
            heart open. The lotus beneath him mirrors his awakening, each petal a vow of
            devotion and stillness.
          </p>
        </article>
      </section>
    </main>
  );
}

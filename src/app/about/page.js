import Link from "next/link";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={styles.description}>
        <h1 className={styles.header}>Om Florius</h1>
        <p className={styles.paragraph}>
          Florius är en omfattande digital plattform som revolutionerar hur vi förstår och tar hand om Sveriges flora.
          Genom att kombinera avancerad teknologi med djupgående forskning om lokala växtarter erbjuder
          Florius en unik uppsättning verktyg och resurser. Lär dig mer om våra funktioner och verktyg
          <Link href="/about/product-description">
            <span className={styles.linkButton}>Click for more</span>
          </Link>
        </p>

        <h1 className={styles.header}>Målgrupp för Florius</h1>
        <p className={styles.paragraph}>
          Florius riktar sig till en mångsidig och omfattande målgrupp som delar en passion för natur och miljövård.
          <Link href="/about/target-audience">
            <span className={styles.linkButton}>Click for more</span>
          </Link>
        </p>

        <h1 className={styles.header}>Utvecklingen av Florius</h1>
        <p className={styles.paragraph}>
          Utvecklingsprocessen av Florius har varit en sammansättning av teknisk innovation och miljömässig passion.
          <Link href="/about/development">
            <span className={styles.linkButton}>Click for more</span>
          </Link>
        </p>
      </div>
    </>
  );
}

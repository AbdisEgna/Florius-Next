import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Skärmbild 2024-04-09 164728.png"
          alt="Florius Logo"
          width={449}
          height={299}
          priority
        />
      </div>
      <div className={styles.introduction}>
        <p className={styles.introText}>
          Welcome to Florius, a revolutionary digital platform dedicated to understanding and caring for Sweden's flora.
          Combining advanced technology with in-depth botanical research, Florius offers a unique suite of tools and resources
          designed to empower both enthusiasts and professionals alike in their efforts to nurture and preserve the natural environment.
        </p>
      </div>
    </>
  );
}

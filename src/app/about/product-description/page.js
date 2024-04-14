import styles from "./page.module.css";

export default function ProductDescriptionPage() {
  return (
    <>
      <h1 className={styles.header}>Produktbeskrivning av Florius</h1>
      
      <h2 className={styles.subHeader}>Översikt</h2>
      <p className={styles.paragraph}>
        Florius är en omfattande digital plattform som revolutionerar hur vi förstår och tar hand om Sveriges flora. 
        Plattformen kombinerar avancerad teknologi med grundlig forskning om lokala växtarter för att erbjuda en unik 
        uppsättning verktyg och resurser till en bred användarbas.
      </p>
      
      <h2 className={styles.subHeader}>Teknologiska Funktioner</h2>
      <p className={styles.paragraph}>
        Användare av Florius kan dra nytta av AI-drivna funktioner för växtidentifiering där de enkelt kan ladda upp bilder 
        och få snabbt tillgång till information om växtens namn, ekologi, skötselråd och bevarandestatus.
      </p>
      
      <h2 className={styles.subHeader}>Skötselinstruktioner</h2>
      <p className={styles.paragraph}>
        Florius inkluderar detaljerade skötselinstruktioner som är anpassade för varje specifik art, från bevattning och 
        ljusbehov till hantering av sjukdomar och skadedjur på ett miljövänligt sätt. AR-teknologin i Florius tillåter användare 
        att visualisera hur olika växter skulle se ut i deras egna trädgårdar eller balkonger, vilket hjälper till i planeringen 
        och ger en djupare förståelse för växternas behov.
      </p>
      
      <h2 className={styles.subHeader}>Community och Utbildning</h2>
      <p className={styles.paragraph}>
        Community-funktionen inom Florius stärker användarnas möjligheter att dela erfarenheter, tips och delta i bevarandeinitiativ.
        Plattformen erbjuder också omfattande utbildningsmaterial och interaktiva kurser som främjar kunskap om ekosystemtjänster 
        och miljöskydd. Genom att demokratisera tillgången till vetenskaplig kunskap, bidrar Florius till ökad miljömedvetenhet 
        och ger verktyg för hållbar växtvård och trädgårdsarbete.
      </p>
    </>
  );
}

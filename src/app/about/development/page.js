import styles from './page.module.css';

export default function DevelopmentPage() {
    return (
        <>
            <div className={styles.description}>
                <h1 className={styles.header}>Utvecklingen av Florius</h1>
                <p className={styles.paragraph}>
                    Utvecklingsprocessen av Florius har varit en sammansättning av teknisk innovation och miljömässig passion.
                    Plattformen har utvecklats med en stark betoning på användarcentrerad design, vilket säkerställer att alla funktioner
                    är intuitiva och lättanvända. Genom att samarbeta med miljövetenskapliga experter och tekniska utvecklare, har Florius
                    lyckats skapa en rik och informativ databas som stöds av vetenskaplig noggrannhet och teknologisk precision.
                </p>
                <p className={styles.paragraph}>
                    En av de främsta utmaningarna har varit att integrera avancerad AI och AR-teknologi på ett sätt som är både funktionellt
                    och användarvänligt. Detta har krävt kontinuerliga iterationer och tester för att säkerställa att applikationen inte bara
                    möter de tekniska kraven utan också användarnas förväntningar på enkelhet och tillgänglighet. Feedback från tidiga användare
                    har varit avgörande för att forma funktionerna och gränssnittet.
                </p>
                <p className={styles.paragraph}>
                    Parallellt med teknikutvecklingen har teamet lagt stor vikt vid att bygga en stark community kring Florius. Genom att
                    organisera workshops, användartester och bevarandeinitiativ har plattformen gradvis blivit mer än bara en app; den har blivit
                    en rörelse för att främja hållbarhet och miljövård. Dessa ansträngningar har inte bara ökat användarbasen utan också förstärkt
                    plattformens trovärdighet och synlighet.
                </p>
                <p className={styles.paragraph}>
                    Sammanfattningsvis, utvecklingen av Florius har varit en resa av samarbete, innovation och engagemang för att skapa en verktygslåda
                    som kan förändra sättet vi interagerar med vår naturliga miljö och bidra till en mer hållbar och livskraftig framtid för den svenska floran.
                </p>
            </div>
        </>
    );
}

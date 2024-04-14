import styles from './page.module.css'; 

export default function TargetAudiencePage() {
    return (
        <>
            <div className={styles.description}>
                <h1 className={styles.header}>Målgrupp för Florius</h1>
                <p className={styles.paragraph}>
                    Florius riktar sig till en mångsidig och omfattande målgrupp som delar en passion för natur och miljövård. Plattformen är speciellt utformad för att tilltala individer med olika intressen och behov, inklusive trädgårdsentusiaster som vill fördjupa sina kunskaper om lokala växtarter, skolelever och lärare som söker efter interaktiva och utbildningsrika resurser för att lära ut om miljön, samt miljöaktivister som önskar engagera sig i lokala bevarandeprojekt.
                </p>
                <p className={styles.paragraph}>
                    Familjer som vill uppmuntra en miljövänlig livsstil hemma och introducera sina barn till trädgårdsarbete och växtvård kommer också finna Florius särskilt användbar. Plattformens användarvänlighet och de lättförståeliga instruktionerna gör det möjligt för dem att integrera hållbarhet i vardagen. Professionella inom trädgårds- och landskapsindustrin kan använda Florius för att få tillgång till en omfattande databas med växtinformation, vilket gör verktyget värdefullt för deras arbete.
                </p>
                <p className={styles.paragraph}>
                    Florius strävar även efter att nå teknikintresserade individer som kanske inte tidigare haft ett stort intresse för trädgårdsarbete eller naturbevarande, men som kan lockas av plattformens innovativa funktioner som AR och AI. Genom att skapa en stark och engagerande användarupplevelse, breddar Florius sin målgrupp och bidrar till en större medvetenhet och engagemang för miljön.
                </p>
            </div>
        </>
    );
}

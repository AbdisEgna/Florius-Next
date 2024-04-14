import styles from './page.module.css'; 

export default function ContactPage() {
    return (
        <>
            <div className={styles.description}>
                <h1 className={styles.header}>Contact Abdifatah Osman</h1>
                <p className={styles.paragraph}>
                    If you're interested in collaborating or have any questions, feel free to reach out. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className={styles.contactInfo}>
                    <h2 className={styles.subHeader}>Contact Details</h2>
                    <p className={styles.paragraph}><strong>Name:</strong> Abdifatah Osman</p>
                    <p className={styles.paragraph}><strong>Email:</strong> <a href="mailto:osab23ez@student.ju.se" className={styles.emailLink}>osab23ez@student.ju.se</a></p>
                </div>
            </div>
        </>
    );
}

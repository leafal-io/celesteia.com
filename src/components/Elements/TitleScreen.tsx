import styles from "~/styles/components/Elements/TitleScreen.module.scss";

export function TitleScreen() {
    return (
        <div class={styles.title}>
            <img class={styles.logo} src='/images/logo.png' />

            <div class={styles.play}>
                <span class={styles.tagline}>Start your adventure today.</span>
                
                <a href="https://github.com/leafal-io/celesteia/releases/latest">
                    <button>Download the latest version</button>
                </a>
            </div>
        </div>
    );
}
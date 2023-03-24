import styles from '~/styles/components/Elements/TitleScreen.module.scss';

export function TitleScreen() {
    return (
        <div class={styles.title}>
            <div class={styles.top}>
                <img class={styles.logo} src="/images/logo.png" />
            </div>

            <div class={styles.showcase}>
                <iframe
                    src="https://www.youtube.com/embed/BLnrp-1Y1iw"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </div>

            <div class={styles.play}>
                <a href="https://github.com/leafal-io/celesteia/releases/latest">
                    <button>Download the latest version</button>
                </a>
            </div>
        </div>
    );
}

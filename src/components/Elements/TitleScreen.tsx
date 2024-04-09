import styles from '~/styles/components/Elements/TitleScreen.module.scss';

export function TitleScreen() {
    return (
        <div class={styles.title}>
            <div class={styles.top}>
                <img class={styles.logo} src="/images/logo.png" />
            </div>

            <div class={styles.showcase}>
                <video
                    src="/video/gameplay.mp4"
                    autoplay
                    controls
                >
                </video>
            </div>

            <div class={styles.play}>
                <a href="https://github.com/leafal-io/celesteia/releases/latest">
                    <button>Download the latest version</button>
                </a>
            </div>
        </div>
    );
}

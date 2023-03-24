import { JSX } from "solid-js";
import styles from "~/styles/components/PageBackdrop.module.scss";

export function PageBackdrop(_props: JSX.HTMLElementTags['div']) {
    return (
        <div class={styles.container}>
            <div class={styles.default} {..._props} />
        </div>
    )
}
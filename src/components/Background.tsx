import { createEffect, createSignal, JSX, splitProps } from "solid-js";
import styles from "~/styles/components/Background.module.scss";

export type BackgroundProps = {
    image: string;
    speed: number;
    index: number;
    opacity: number;
}

export function Background(_props: JSX.HTMLElementTags['div'] & BackgroundProps) {
    const [props, rest] = splitProps(_props, ['image', 'speed', 'index', 'opacity']);
    const [rotation, setRotation] = createSignal(0);

    createEffect(() => {
        rotation();
        requestAnimationFrame((time) => {
            setRotation((time / 1000) * props.speed);
        });
    });

    return (
        <div
            class={styles.element}
            style={{
                "background-image": `url(${props.image})`,
                transform: `rotate(${rotation()}deg)`,
                "z-index": props.index,
                opacity: props.opacity
            }}
        >

        </div>
    )
}
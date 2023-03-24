import { Title } from 'solid-start';
import { Background } from '~/components/Background';
import { TitleScreen } from '~/components/Elements/TitleScreen';
import { PageBackdrop } from '~/components/PageBackdrop';

export default function Home() {
    return (
        <>
            <Title>Celesteia</Title>
            <PageBackdrop>
                <Background
                    image="/images/background/stars.png"
                    speed={-0.1}
                    index={1}
                    opacity={1}
                />
                <Background
                    image="/images/background/shadow.png"
                    speed={5}
                    index={2}
                    opacity={1}
                />
                <Background
                    image="/images/background/shadow.png"
                    speed={3}
                    index={3}
                    opacity={1}
                />
                <Background
                    image="/images/background/nebula1.png"
                    speed={3}
                    index={9}
                    opacity={0.18}
                />
                <Background
                    image="/images/background/nebula2.png"
                    speed={-2}
                    index={10}
                    opacity={0.18}
                />
            </PageBackdrop>

            <div id="content">
                <TitleScreen />
            </div>
        </>
    );
}

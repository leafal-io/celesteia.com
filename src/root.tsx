// @refresh reload
import { Suspense } from 'solid-js';
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Link,
    Meta,
    Routes,
    Scripts,
    Title,
} from 'solid-start';
import './styles/root.scss';

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>Celesteia</Title>
                <Meta charset="utf-8" />
                <Meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Link rel="preload" as="image" href="/images/button.png" />
                <Link
                    rel="preload"
                    as="image"
                    href="/images/button-hover.png"
                />
                <Link
                    rel="preload"
                    as="image"
                    href="/images/button-active.png"
                />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}

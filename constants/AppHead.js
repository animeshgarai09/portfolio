import Head from "next/head"
const AppHead = ({ title }) => {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="../public/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon/favicon-16x16.png" />
                <link rel="manifest" href="../public/favicon/site.webmanifest" />
                <link rel="mask-icon" href="../public/favicon/safari-pinned-tab.svg" color="#621a9a" />
                <meta name="apple-mobile-web-app-title" content="Animeshdesigns" />
                <meta name="application-name" content="Animeshdesigns" />
                <meta name="msapplication-TileColor" content="#ffc40d" />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2c2f33" />
                <link rel="preload" href="../public/fonts/Raleway-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="../public/fonts/Raleway-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="../public/fonts/Raleway-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <title>{title}</title>
            </Head>
        </>
    )
}

export default AppHead

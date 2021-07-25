import '../styles/globals.scss'
function MyApp({ Component, pageProps }) {
    // useLocoScroll();
    return (
        <main id='main'>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp

import Head from 'next/head'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Leon's HomePage</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content="Leon's HomePage" />
                <meta
                    name="keywords"
                    content="Li-Chen Cheng, Leon Cheng, Leon's HomePage"
                />
                <meta name="author" content="Li-Chen Cheng" />
                <meta
                    name="og:title"
                    property="og:title"
                    content="Leon's HomePage"
                />
                <meta
                    name="og:description"
                    property="og:description"
                    content="Leon's HomePage"
                />
                <meta name="og:type" property="og:type" content="website" />
                <link
                    rel="shortcut icon"
                    href="/Images/Icons/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="apple-touch-icon"
                    href="/Images/Icons/apple-touch-icon.png"
                />
            </Head>
            <NavigationBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout

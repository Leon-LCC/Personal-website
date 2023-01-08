import Head from "next/head"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/footer"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Leon's HomePage</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavigationBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
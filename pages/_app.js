import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

import { AnimatePresence } from 'framer-motion'

import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme} cookies={pageProps.cookies}>
            <AnimatePresence
                mode="wait"
                initial={true}
                onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 })
                    }
                }}
            >
                <Component {...pageProps} />
            </AnimatePresence>
            <Layout />
        </ChakraProvider>
    )
}

export default MyApp

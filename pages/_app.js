import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

import { AnimatePresence } from 'framer-motion'



const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} cookies={pageProps.cookies}>
      <AnimatePresence mode="wait" exitBeforeEnter initial={true} onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
      }}>
        <Component {...pageProps}/>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
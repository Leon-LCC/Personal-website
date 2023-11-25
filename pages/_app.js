import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

import { AnimatePresence } from 'framer-motion'



const MyApp = ({ Component, pageProps }) => {
  return (
    <AnimatePresence mode="wait" exitBeforeEnter initial={true} onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 })
        }
      }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps}/>
      </ChakraProvider>
    </AnimatePresence>
  )
}

export default MyApp
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/bebas-neue'
import '@fontsource/zilla-slab'

import { withProse } from '@nikolovlazar/chakra-ui-prose'

const styles = {
    global: (props) => ({
        body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('#ffffffff', '#0f0f0fff')(props),
        },
    }),
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const components = {
    Button: {
        variants: {
            solid: (props) => ({
                bg: mode('#F7F4F2', '#262626')(props),
                color: mode('#35261D', 'whiteAlpha.900')(props),
                _hover: { bg: mode('#E3E0DD', '#434343')(props) },
            }),
            solid2: (props) => ({
                bg: mode('transparent', 'transparent')(props),
                _hover: {
                    bg: mode('#e7e7e7ab', '#262626')(props),
                    undeline: 'none',
                },
            }),
            solid3: (props) => ({
                bg: mode('transparent', 'transparent')(props),
                _hover: {
                    bg: mode('transparent', 'transparent')(props),
                    undeline: 'none',
                },
            }),
            route: (props) => ({
                bg: mode('transparent', 'transparent')(props),
                _hover: { bg: mode('#D1CBC7', '#484646')(props) },
            }),
        },
        defaultProps: {
            variant: 'solid',
        },
    },
    Heading: {
        variants: {
            logo: (props) => ({
                color: mode('#35261D', 'whiteAlpha.900')(props),
            }),
            section: (props) => ({
                color: mode('#35261D', 'whiteAlpha.900')(props),
            }),
        },
        defaultProps: {
            variant: 'section',
        },
    },
}

const fonts = {
    heading: 'bebas-neue, sans-serif',
    body: 'bebas-neue, sans-serif',
}

const theme = extendTheme({ styles, config, components, fonts }, withProse())

export default theme

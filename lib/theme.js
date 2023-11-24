import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/mirza"
import "@fontsource/miriam-libre"


const styles = {
    global: (props) => ({
        body: {
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("#D5BDAF", "gray.800")(props),
        },
    })
};

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const components = {
    Button: {
        variants: {
            solid: (props) => ({
                bg: mode("#F7F4F2", "red.500")(props),
                color: mode("#35261D", "whiteAlpha.900")(props),
                _hover: { bg: mode("#E3E0DD", "#E3E0DD")(props) },
            }),
            solid2: (props) => ({
                bg: mode("transparent", "transparent")(props),
                _hover: { bg: mode("#E3E0DD", "#E3E0DD")(props), undeline: "none" },
            }),
            solid3: (props) => ({
                bg: mode("transparent", "transparent")(props),
                _hover: { bg: mode("transparent", "transparent")(props), undeline: "none" },
            }),
            route: (props) => ({
                bg: mode("transparent", "transparent")(props),
                _hover: { bg: mode("#D1CBC7", "#D1CBC7")(props) },
            }),
        },
        defaultProps: {
            variant: "solid",
        },
    },
    Heading: {
        variants: {
            logo: (props) => ({
                color: mode("#35261D", "whiteAlpha.900")(props),
            }),
            section: (props) => ({
                color: mode("#35261D", "whiteAlpha.900")(props),
            }),
        },
        defaultProps: {
            variant: "section",
        },
    },
}

const fonts = {
    heading: "Mirza",
    body: "Mirza",
}

const theme = extendTheme({ styles, config, components, fonts });

export default theme;
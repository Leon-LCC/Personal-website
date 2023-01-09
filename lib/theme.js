import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("#D5BDAF", "gray.800")(props),
        },
    })
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const components = {
    Button: {
        baseStyle: {
            fontWeight: "bold",
        },
        variants: {
            "with-shadow": {
                bg: "red.400",
                boxShadow: "0 0 2px 2px #efdfde",
            },
            solid: (props) => ({
                bg: mode("red.300", "red.500")(props),
            }),
        },
        defaultProps: {
            variant: "solid",
        },
    },
    Heading: {
        variants: {
            section: (props) => ({
                bg: mode("red.300", "red.500")(props),
            }),
        },
        defaultProps: {
            variant: "section",
        },
    },
}

const fonts = {
    heading: "Roboto",
    body: "Roboto",
}

const theme = extendTheme({ styles, config, components, fonts });

export default theme;
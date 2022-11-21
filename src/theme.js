import { extendTheme, MenuDescendantsProvider } from "@chakra-ui/react"

const tokens = {
    colors: {
        light: {
            "bg-default": "white",
        },
        dark: {
            "bg-default": "black",
        },
    },
}
const semanticTokens = {
    colors: {
        "bg-default": {
            default: tokens.colors.light["bg-default"],
            _dark: tokens.colors.dark["bg-default"],
        },
    },
}

//global style
const styles = {
    global: {
        body: {
            background: "bg-default",
        },
    },
}

//override components style
const components = {
    Button: {
        baseStyle: {
            color: "white",
            _focus: {
                ring: "0px",
            },
        },
        variants: {
            solid: {
                backgroundColor: "green",
            },
            primary: {
                width: "200px",
                height: "60px",
                backgroundColor: "#212121",
            },
        },
    },
}

const theme = extendTheme({
    styles,
    semanticTokens,
    components,
})

export default theme

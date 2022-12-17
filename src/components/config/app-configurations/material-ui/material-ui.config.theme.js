// * Import Tools
import { createTheme } from "@mui/material/styles";

// * Import Constants
import { THEME_LIGHT } from "@constants/theme";

const {
    palette: { augmentColor },
} = createTheme();
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

export const MATERIAL_UI_THEME_CONFIG = createTheme({
    direction: "rtl",
    palette: {
        primary: createColor(THEME_LIGHT.PRIMARY),
        info: createColor(THEME_LIGHT.INFO),
        danger: createColor(THEME_LIGHT.DANGER),
        success: createColor(THEME_LIGHT.SUCCESS),
        rose: createColor(THEME_LIGHT.ROSE),
        warning: createColor(THEME_LIGHT.WARNING),
        dark: createColor(THEME_LIGHT.DARK),
        light: createColor(THEME_LIGHT.LIGHT),
        secondary: createColor(THEME_LIGHT.SECONDARY),
        violet: createColor(THEME_LIGHT.VIOLET),
        brand: createColor(THEME_LIGHT.BRAND),
        default: createColor(THEME_LIGHT.TEXT),

        "primary.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "info.light": {
            main: THEME_LIGHT.INFO_PALE,
            contrastText: THEME_LIGHT.INFO,
        },
        "danger.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "success.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "rose.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "warning.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "dark.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "secondary.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "violet.light": {
            main: THEME_LIGHT.PRIMARY_PALE,
            contrastText: THEME_LIGHT.PRIMARY,
        },
        "brand.light": {
            main: THEME_LIGHT.BRAND_PALE,
            contrastText: THEME_LIGHT.BRAND,
        },
    },
    typography: {
        fontFamily: "IRANSans",
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "IRANSans",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    fontFamily: "IRANSans",
                    width: "100%",
                },
            },
        },
    },
});

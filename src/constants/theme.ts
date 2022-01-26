import {  Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");

const FONT_SCALE = PixelRatio.getFontScale();

const white = '#fff';
const black = '#111';

export const DEFAULTS = {
    RADIUS: 6
}

export const COLORS = {
    primary: "#7F5DF0",     // Light purple
    secondary: "#5D2DFD",   // Dark purple

    white: "#fff",
    black: "#000000",
    green: "#37E39F",
    red: "#F9A8BA",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#f5f6fa"
};


export const ALIGNMENT = {
    "center": 'center',
    "left": 'flex-start',
    "right": 'flex-end'
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 50,
    padding: 10,

    // font sizes
    h1: 30 / FONT_SCALE,
    h2: 22 / FONT_SCALE,
    h3: 16 / FONT_SCALE,
    h4: 14 / FONT_SCALE,
    body1: 30 / FONT_SCALE,
    body2: 22 / FONT_SCALE,
    body3: 16 / FONT_SCALE,
    body4: 14 / FONT_SCALE,
    body5: 12 / FONT_SCALE,

    // app dimensions
    width,
    height
};
export const FONTS = {
    h1: { fontFamily: "Poppins-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Light", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Light", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Light", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Light", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Light", fontSize: SIZES.body5, lineHeight: 22, letterSpacing: 0.35 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
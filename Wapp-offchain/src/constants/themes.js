export const layout = {
  format: ["px", "rem", "em"],
  fontFamily: '"Inter", sans-serif, -apple-system, BlinkMacSystemFont',
  fontSize: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontHeight: [1.0, 1.125, 1.25, 1.375, 1.5],
  fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  media: {
    xxs: 320,
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1140,
    xl: 1920,
    xxl: 2560,
  },
  default: {
    radius: "4px",
    padding: "16px",
  },
};

export const light = {
  name: "light",
  base: "#F7F9FA",
  background: "#fafafa",
  foreground: "#ffffff",
  navigation: "#E0004D",
  border: "#e2e3e2",
  primary: "#2b2d42",
  secondary: "#7f8a9d;",
  input: "#fafafa",
  accent: "#EF233C",
  shadow: "0px 4px 9px rgba(126, 123, 123, 0.06);",
  layout: layout,
  // variants: variants,
};

// export const darkTheme = {
//   name: "dark",
//   base: darkColors[10],
//   background: darkColors[10],
//   foreground: darkColors[11],
//   navigation: darkColors[12],
//   border: darkColors[13],
//   primary: darkColors[1],
//   secondary: darkColors[3],
//   input: darkColors[8],
//   accent: darkAccent,
//   layout: layout,
//   variants: variants,
// };

// CUSTOM THEME OBJECT

// export const customTheme = {
//   name: "",
//   base: "",
//   background: "",
//   foreground: "",
//   navigation: "",
//   border: "",
//   primary: "",
//   secondary: "",
//   input: "",
//   accent: "",
//   layout: layout,
//   variants: variants,
// };

// import { colorGenerator, singleColor } from "../utils/colors.js";
//
// const darkBase = "#202225";
// const darkColors = colorGenerator(darkBase);
// const darkAccent = singleColor("#ff4771");
//
// const sepiaBase = "#f8f1e3";
// const sepiaColors = colorGenerator(sepiaBase);
// const sepiaAccent = singleColor("#FF7326");
//
// const lightBase = "#ebebec";
// const lightColors = colorGenerator(lightBase);
// const lightAccent = singleColor("#8d55a3");
//
// export const variants = {
//   pink: colorGenerator("#E63E98"),
//   green: colorGenerator("#40D674"),
//   blue: colorGenerator("#017FDD"),
//   yellow: colorGenerator("#ECAF01"),
//   red: colorGenerator("#F64538"),
//   purple: colorGenerator("#9E37A9"),
//   black: colorGenerator("#202022"),
//   grey: colorGenerator("#E5E5E5"),
//   white: colorGenerator("#B3C2C8"),
// };

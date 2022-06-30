import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    border: 0;
    background: "#fafafa";
    display: flex;
    flex: 1;
    font-feature-settings: 'zero' 1;
    font-size: 16px;
    font-family: "Inter", "Bebas Neue", sans-serif, -apple-system, BlinkMacSystemFont, "Fira Code", monospace;;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-display: swap;

  `;

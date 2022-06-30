import { css } from "styled-components";
import { layout } from "./themes.js";

const media = Object.keys(layout.media).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function (...args) {
      return css`
        @media (max-width: ${layout.media[size]}px) {
          ${css(...args)};
        }
      `;
    },
  };
}, {});

export default media;

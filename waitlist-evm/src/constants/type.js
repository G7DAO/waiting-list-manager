import styled from "styled-components";
import media from "./media.js";
// import { setLetterSpacing } from "../utils/utils.js";
// import { Link } from "react-router-dom";

export const Title = styled.div`
  font-family: "Bebas Neue";
  font-size: 100px;
  color: ${(props) => props.theme.primary};
  line-height: 1.1em;
  max-width: ${(props) => props.maxWidth};

  ${media.md`
    font-size: 72px;
  `}
`;

export const Description = styled.div`
  font-family: "Inter";
  font-size: 18px;
  line-height: 1.5em;
  color: ${(props) => props.theme.secondary};
  max-width: ${(props) => props.maxWidth};

  ${media.md`
    font-size: 16px;
  `};
`;
//
// export const Text = styled.p`
//   /* Take the theme prop and set color*/
//   color: ${(props) => props.theme.primary.hex};
//   /* If the text is small line height is 1.500 else 1.125 */
//   line-height: ${(props) =>
//     props.size > 24
//       ? (props) =>
//           props.size * props.theme.layout.fontHeight[2] +
//           `${props.theme.layout.format[0]}`
//       : (props) =>
//           props.size * props.theme.layout.fontHeight[4] +
//           `${props.theme.layout.format[0]}`};
//   /*Dynamically size the weight*/
//   font-weight: ${(props) => props.weight};
//   /*Dynamically set the size and append "px"*/
//   font-size: ${(props) => props.size + `${props.theme.layout.format[0]}`};
//   /*Dynamically set the alignment*/
//   text-align: ${(props) => props.align};
//   /*Take the font size and calculate the traccking and append"px"*/
//   letter-spacing: ${(props) =>
//     props.size &&
//     setLetterSpacing(props.size) + `${props.theme.layout.format[0]}`};
// `;
//
// export const H1 = styled.h1`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[5] * props.theme.layout.fontHeight[2] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[5]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[5] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[5]) +
//     `${props.theme.layout.format[0]}`};
// `;
//
// export const H2 = styled.h2`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[4] * props.theme.layout.fontHeight[2] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[5]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[4] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[4]) +
//     `${props.theme.layout.format[0]}`};
// `;
//
// export const H3 = styled.h3`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[3] * props.theme.layout.fontHeight[2] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[5]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[3] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[3]) +
//     `${props.theme.layout.format[0]}`};
// `;
//
// export const H4 = styled.h4`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[2] * props.theme.layout.fontHeight[2] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[5]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[2] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[2]) +
//     `${props.theme.layout.format[0]}`};
// `;
//
// export const H5 = styled.h4`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[1] * props.theme.layout.fontHeight[2] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[5]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[1] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[1]) +
//     `${props.theme.layout.format[0]}`};
// `;
//
// export const H6 = styled.h6`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[0] * props.theme.layout.fontHeight[2] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[5]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[0] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[0]) +
//     `${props.theme.layout.format[0]}`};
// `;
//
// export const P = styled.p`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[2] * props.theme.layout.fontHeight[4] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[3]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[2] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[2]) +
//     `${props.theme.layout.format[0]}`};
//
//   &::selection {
//     color: ${(props) => props.theme.primary.hex};
//     background: rgba(
//       ${(props) => props.theme.accent.raw.rgb.r},
//       ${(props) => props.theme.accent.raw.rgb.g},
//       ${(props) => props.theme.accent.raw.rgb.b},
//       ${0.6}
//     );
//   }
// `;
//
// export const Label = styled.label`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[0] * props.theme.layout.fontHeight[4] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[3]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[1] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[1]) +
//     `${props.theme.layout.format[0]}`};
//   margin-bottom: ${(props) =>
//     props.theme.layout.space[1] + `${props.theme.layout.format[0]}`};
//   margin-top: ${(props) =>
//     props.theme.layout.space[1] + `${props.theme.layout.format[0]}`};
// `;
//
// export const Small = styled.p`
//   color: ${(props) => props.theme.secondary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[0] * props.theme.layout.fontHeight[2] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[3]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[0] + `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[0]) +
//     `${props.theme.layout.format[0]}`};
//
//   &::selection {
//     color: ${(props) => props.theme.primary.hex};
//     background: rgba(
//       ${(props) => props.theme.accent.raw.rgb.r},
//       ${(props) => props.theme.accent.raw.rgb.g},
//       ${(props) => props.theme.accent.raw.rgb.b},
//       ${0.6}
//     );
//   }
//   }
// `;
//
// export const A = styled.a`
//   color: ${(props) => props.theme.accent.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[2] * props.theme.layout.fontHeight[4] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[3]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[`${(props) => props.size}`] +
//     `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[2]) +
//     `${props.theme.layout.format[0]}`};
// `;
//
// export const Route = styled(Link)`
//   color: ${(props) => props.theme.accent.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[2] * props.theme.layout.fontHeight[4] +
//     `${props.theme.layout.format[0]}`};
//   font-weight: ${(props) => props.theme.layout.fontWeight[3]};
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[`${(props) => props.size}`] +
//     `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[2]) +
//     `${props.theme.layout.format[0]}`};
//   text-decoration: none;
//
//   &:focus {
//     font-weight: 500;
//     outline: 1px solid palegreen;
//     background: lightblue;
//   }
// `;
//
// export const Pre = styled.pre`
//   color: ${(props) => props.theme.primary.hex};
//   line-height: ${(props) =>
//     props.theme.layout.fontSize[2] * props.theme.layout.fontHeight[4] +
//     `${props.theme.layout.format[0]}`};
//   font-family: "Fira Code", monospace;
//   font-size: ${(props) =>
//     props.theme.layout.fontSize[`${(props) => props.size}`] +
//     `${props.theme.layout.format[0]}`};
//   text-align: ${(props) => props.align};
//   letter-spacing: ${(props) =>
//     setLetterSpacing(props.theme.layout.fontSize[2]) +
//     `${props.theme.layout.format[0]}`};
//
//   &::selection {
//     color: ${(props) => props.theme.primary.hex};
//     background: rgba(
//       ${(props) => props.theme.accent.raw.rgb.r},
//       ${(props) => props.theme.accent.raw.rgb.g},
//       ${(props) => props.theme.accent.raw.rgb.b},
//       ${0.6}
//     );
//   }
// `;

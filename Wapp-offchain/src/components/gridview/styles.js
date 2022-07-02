import styled from "styled-components";
import media from "../../constants/media.js";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background: ${(props) => props.theme.foreground};
`;

export const Cards = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: 1360px;
  padding: 20px;

  ${media.md`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

import styled from "styled-components";
import media from "../../constants/media.js";

export const Container = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80px;

  ${media.sm`
    height: 280px;
  `}
`;

export const Grid = styled.div`
  max-width: 1360px;
  width: 100%;
  display: flex;
  align-items: center;

  ${media.sm`
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 20px;

  `};
`;

//
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  grid-gap: 20px;

  text-align: ${(props) => props.align};

  ${media.sm`
    flex-direction: column;
    grid-gap: 12px;
    align-items: flex-start;
  `}
`;

export const Copyright = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.5em;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  transition: 500ms;
  width: 100%;
  text-align: right;

  ${media.sm`
    text-align: left;
    font-size: 14px;
  `}
`;

export const Title = styled.a`
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  line-height: 1.5em;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  text-transform: uppercase;
  display: none;

  ${media.sm`
      display: inline;
  `}
`;

export const Link = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.5em;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  transition: 500ms;

  &:hover {
    color: ${(props) => props.theme.accent};
    transition: 500ms;
  }
`;

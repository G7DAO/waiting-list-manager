import styled from "styled-components";
import media from "../../constants/media.js";
import { Link } from "react-router-dom";
import hero from "../../assets/patterns/hero.svg";

export const Container = styled.div`
  width: 100vw;
  height: 82vh ;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  background-image: url(${hero});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 80px;


  ${media.xl`
    background-size: 100%;
  `}

  ${media.lg`
    background-size: 150%;
  `}

  ${media.md`
    background-size: 200%;
  `}

  ${media.sm`
    background-size: 400%;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.div`
  font-size: 120px;
  color: ${(props) => props.theme.primary};
  text-align: center;
  line-height: 1em;
  font-family: "Bebas Neue", sans-serif;
  z-index: 2000;
  text-align: left;

  ${media.md`
    font-size: 100px;
    text-align: center;
  `}
  ${media.sm`
    font-size: 80px;
    text-align: center;
  `}
`;

export const Description = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.secondary};
  max-width: 900px;
  line-height: 1.5em;
  font-family: "Inter", sans-serif;
  text-align: center;
  z-index: 2000;

  ${media.md`
    text-align: center;
    max-width: 680px;
    font-size: 18px;
  `}
  ${media.sm`
    text-align: center;
    max-width: 680px;
    font-size: 16px;
  `}
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  grid-gap: 24px;
  margin-top: 20px;
  z-index: 2000;
  ${media.md`
    justify-content: center;
  `}
`;

export const Route = styled.a`
  font-size: 16px;
  color: #ff2401;
  ext-decoration: underline;
  transition: 750ms;
  text-align: left;
  margin-top: 12px;
  color: ${(props) => props.theme.secondary};
  ${media.md`
      text-align: center;
  `}
  &:hover {
    transition: 750ms;
    text-decoration: underline;
  }
`;

export const Fill = styled.div`
  height: 60px;
  width: 220px;
  display: flex;
  font-family: "Inter", sans-serif;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  background: ${(props) => props.theme.accent};
  border-radius: 8px;
  text-decoration: none;
  transition: 750ms;

  ${media.md`
      width: 200px;
  `}

  &:hover {
    transition: 750ms;
    cursor: pointer;
  }
`;

export const Outline = styled.div`
  height: 60px;
  width: 220px;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => props.theme.accent};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 8px;
  text-decoration: none;
  transition: 750ms;

  ${media.sm`
      display: none;
  `}

  &:hover {
    transition: 750ms;
    cursor: pointer;
  }
`;

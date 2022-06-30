import styled from "styled-components";
import media from "../../constants/media.js";
import { Link } from "react-router-dom";
import ink from "../../assets/patterns/ink.svg";

export const Container = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFDDB7;
  background-image: url(${ink});
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
  color: white;
  text-align: center;
  line-height: 1em;
  font-family: "Bebas Neue", sans-serif;
  z-index: 2000;
  text-align: left;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

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
  color: #f9f9f9;
  max-width: 900px;
  line-height: 1.5em;
  font-family: "Inter", sans-serif;
  text-align: center;
  z-index: 2000;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

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

export const Fill = styled.a`
  height: 60px;
  width: 200px;
  display: flex;
  font-family: "Inter", sans-serif;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #ff2401;
  background: #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: 750ms;

  ${media.md`
      width: 150px;
  `}
  &:hover {
    transition: 750ms;
    background: #f9f9f9;
  }
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

export const Outline = styled(Link)`
  height: 60px;
  width: 200px;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: 750ms;
  ${media.md`
      width: 150px;
  `}
  &:hover {
    background: #fff;
    transition: 750ms;
    color: #ff2401;
    border: 1px solid #ff2401;
  }
`;

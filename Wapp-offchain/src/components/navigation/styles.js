import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "../../constants/media.js";

export const Container = styled.div`
  height: 80px;
  width: 100vw;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  border: 1px solid #e2e3e2;
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 10000;
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  margin-left: 20px;
  text-decoration: none;
`;

export const Background = styled.div`
  border-radius: 4px;
  background: ${(props) => props.theme.accent};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

export const Name = styled.img`
  width: 120px;

  ${media.sm`
    display: none;
  `};
`;

export const Join = styled.a`
  height: 48px;
  width: 140px;
  font-family: "Inter", sans-serif;
  background: ${(props) => props.theme.accent};
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border-radius: 4px;
  transition: 750ms;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background: #cc1d01;
    transition: 750ms;
  }
`;

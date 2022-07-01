import styled from "styled-components";

export const Container = styled.div`
  height: 42px;
  background: #83cfbf;
  font-family: "Inter", sans-serif;
  position: fixed;
  z-index: 3000;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
  padding: 0px 12px;
`;

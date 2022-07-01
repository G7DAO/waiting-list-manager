import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${(props) => props.theme.border};
  padding: 20px;
  border-radius: 4px;
  margin-top: 80px;
  margin-bottom: 80px;
  background: ${(props) => props.theme.foreground};
`;

export const Title = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  color: ${(props) => props.theme.primary};
`;

export const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 20px;
  line-height: 1.5em;
  color: ${(props) => props.theme.secondary};
`;

export const Route = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 20px;
  line-height: 1.5em;
  color: #ff2401;
`;

export const Button = styled.div`
  padding: 16px 24px;
  background: #ff2401;
  color: white;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  transition: 750ms;

  &:hover {
    cursor: pointer;
    background: #cc1d01;
    transition: 750ms;
  }
`;

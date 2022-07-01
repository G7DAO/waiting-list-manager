import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  background: white;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const Image = styled.div`
  height: 160px;
  background: ${(props) => props.theme.background};
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Tags = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  grid-gap: 12px;
`;

export const Budget = styled.div`
  padding: 8px 12px;
  background: #ecfbf1;
  border: 1px solid #b3efc7;
  border-radius: 24px;
  color: #268046;
  font-size: 11px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  max-width: 100px;
  display: flex;
  justify-content: center;
`;

export const Status = styled.div`
  padding: 8px 12px;
  background: #e6f2fc;
  border: 1px solid #b3d9f5;
  border-radius: 24px;
  color: #01599b;
  font-size: 11px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  max-width: 60px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 32px;
  font-family: "Bebas Neue", sans-serif;
  padding-bottom: 12px;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.secondary};
  font-size: 16px;
  font-family: "inter", sans-serif;
  line-height: 1.5em;
  padding-bottom: 20px;
`;

export const Button = styled.div`
  padding: 12px 24px;
  background: ${(props) => props.theme.accent};
  display: flex;
  border-radius: 4px;
  color: white;
  font-family: "Inter", sans-serif;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

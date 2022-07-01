import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 4px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.secondary};
`;

export const Field = styled.input`
  padding: 16px 20px;
  font-size: 15px;
  font-family: "Inter", sans-serif;
  border-radius: 4px;
  outline: none;
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.border};

  &::placeholder {
    color: ${(props) => props.theme.secondary};
  }
`;

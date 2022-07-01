// Relative Imports
import { Container, Field, Label } from "./styles";

const Input = ({ label, placeholder, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Field onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default Input;

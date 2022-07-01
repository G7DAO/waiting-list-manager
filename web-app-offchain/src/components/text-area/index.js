// Relative Imports
import { Container, Field, Label } from "./styles";

const TextArea = ({ label, placeholder, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Field onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default TextArea;

// Relative Imports
import { Container, Cards } from "./styles";

const GridView = ({ children }) => {
  return (
    <Container>
      <Cards>{children}</Cards>
    </Container>
  );
};

export default GridView;

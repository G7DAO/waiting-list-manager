// Relative Imports
import {
  Container,
  Title,
  Description,
  Content,
  Fill,
  Outline,
  Section,
} from "./styles";

const Header = ({ title, description }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default Header;

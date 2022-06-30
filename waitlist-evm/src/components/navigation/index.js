// Relative Imports
import { Container, Brand, Icon, Name, Background, Join } from "./styles";
import logo from "../../assets/brand/logo.svg";
import icon from "../../assets/brand/icon.svg";

const Navigation = () => {
  return (
    <Container>
      <Brand to="/">
        <Background>
          <Icon src={icon} />
        </Background>
        <Name src={logo} />
      </Brand>
      <Join href="https://twitter.com/G7_DAO" target="_blank">
        Follow Us
      </Join>
    </Container>
  );
};

export default Navigation;

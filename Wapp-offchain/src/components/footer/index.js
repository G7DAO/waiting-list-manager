// Relative Imports
import {
  Container,
  Grid,
  Copyright,
  Link,
  Section,
  Title,
  Icon,
  Row,
  Game7,
} from "./styles";

import github from "../../assets/icons/GitHub.svg";
import medium from "../../assets/icons/Medium.svg";
import reddit from "../../assets/icons/Reddit.svg";
import twitter from "../../assets/icons/Twitter.svg";
import logo from "../../assets/brand/logo-grey.svg";

const Footer = () => {
  return (
    <Container>
      <Grid>
        <Section align="right">
          <Title>Connect with us</Title>
          <Row>
            <Icon src={twitter} />
            <Link href="https://twitter.com/G7_DAO" target="_blank">
              Twitter
            </Link>
          </Row>
          <Row>
            <Icon src={medium} />
            <Link href="https://medium.com/@G7_DAO" target="_blank">
              Medium
            </Link>
          </Row>
          <Row>
            <Icon src={reddit} />
            <Link href="https://reddit.com/r/G7_DAO" target="_blank">
              Reddit
            </Link>
          </Row>
          <Row>
            <Icon src={github} />
            <Link href="https://github.com/G7DAO" target="_blank">
              Github
            </Link>
          </Row>
        </Section>
        <Copyright>
          ©
          <Game7 src={logo} />
        </Copyright>
      </Grid>
    </Container>
  );
};

export default Footer;

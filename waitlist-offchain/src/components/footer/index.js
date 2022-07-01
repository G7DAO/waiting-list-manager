// Relative Imports
import { Container, Grid, Copyright, Link, Section, Title } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Grid>
        <Section align="right">
          <Title>Connect with us</Title>
          <Link href="https://twitter.com/G7_DAO" target="_blank">
            Twitter
          </Link>
          <Link href="https://medium.com/G7_DAO" target="_blank">
            Medium
          </Link>
          <Link href="https://reddit.com/r/G7_DAO" target="_blank">
            Reddit
          </Link>
          <Link href="https://github.com/G7DAO" target="_blank">
            Github
          </Link>
        </Section>
        <Copyright>Game7 ©2022 </Copyright>
      </Grid>
    </Container>
  );
};

export default Footer;

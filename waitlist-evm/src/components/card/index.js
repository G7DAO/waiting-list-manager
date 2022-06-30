// Relative Imports
import {
  Container,
  Button,
  Title,
  Description,
  Image,
  Content,
  Budget,
  Tags,
  Status,
} from "./styles";

const Card = () => {
  return (
    <Container>
      <Image />
      <Content>
        <Title>UPCOMING AIR DROPS</Title>
        <Tags>
          <Budget>$25,000</Budget>
          <Status>Unclaimed</Status>
        </Tags>
        <Description>
          Eaque nihil sapiente modi. Odio vel qui temporibus nemo quos.
          Dignissimos et repudiandae vel sit dolores sed. Quo suscipit voluptas
          aut non et ad rerum reiciendis. Ea ut tempore odit. Repudiandae
          maiores facere dolorem unde fuga officia magni sit.
        </Description>
        <Button>Learn More</Button>
      </Content>
    </Container>
  );
};

export default Card;

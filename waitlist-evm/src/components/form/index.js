// Relative Imports
import { Container, Title, Description, Route } from "./styles";

const Form = ({ children }) => {
  return (
    <Container>
      <Title>Join the Waitlist</Title>
      <Description>
        Please submit the following form to add yourself to our waitlist.
        To learn more about this waitlist template please view the{" "}
        <Route
          target="_blank"
          href="https://github.com/G7DAO/waiting-list-manager"
        >
          Game7 Waitlist
        </Route>{" "}
      </Description>
      {children}
    </Container>
  );
};

export default Form;

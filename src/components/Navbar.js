import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CriticScale</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Artist</Nav.Link>
            <Nav.Link href="#pricing">Albums</Nav.Link>
            <Nav.Link href="#home"><Login /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}

export default ColorSchemesExample;

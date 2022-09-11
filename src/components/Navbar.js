import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="succed" variant="dark">
        <Container>
          <Navbar.Brand href="home" style={{ color: 'green' }}>♫ CriticScale ♫</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="explore" style={{ color: 'green' }}> ♩ Explore ♩</Nav.Link>
            <Nav.Link href="profile" style={{ color: 'green' }}> ♬ Profile ♬</Nav.Link>
          </Nav>
          <Login href = "login" />
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}

export default ColorSchemesExample;

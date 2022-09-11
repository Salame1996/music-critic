import { Container } from "react-bootstrap";
import ColorSchemesExample from "../components/Navbar";
import UserProfile from "../components/Profile";

export default function Profile() {
  return (
    <div >
      <ColorSchemesExample />
      <Container >
        <h1 style={{ color: 'green' }} >Good Morning Jack!</h1>
        <UserProfile/>
      </Container>
    </div>
  );
}

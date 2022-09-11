import { Container } from "react-bootstrap";
import ColorSchemesExample from "../components/Navbar";
import UserCard from "../components/UserCard";
import { Row } from "react-bootstrap";
import data from "../mockdata/users.json";

export default function Explore() {

  return (
    <div>
      <ColorSchemesExample />
      <Container>
        <h1 style={{ color: 'green' }}>Discover Crtics!</h1>
      </Container>
      <Container>
        <Row className="mx-3 row row-cols-1">
          {data.map((user) => {
        
            return (
              <UserCard
                avatar={user.avatar}
                handle={user.handle}
                reviewCount={user.reviewCount}
                location={user.location}
                memberDate={user.memberDate}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

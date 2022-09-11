

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import ColorSchemesExample from "../components/Navbar";
import { Rating } from "../components/Rating";



const CLIENT_ID = "187793585c46431fbdaa2d711ed725fc";
const CLIENT_SECRET = "5285ea35a07743ff8c6203c33b824921";


function SearchAlbum() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //Search Function

  async function search() {
    console.log("searching for " + searchInput);

    //Get request wiith Artist ID
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log(artistID);
    //get request with artist id to grab all albums
    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });
  }
  console.log(albums);
  return (
    <div className="App">
      <Container>
        <ColorSchemesExample />
      </Container>
      <Container >
        <InputGroup className="mb-4" size="lg">
          <FormControl
            placeholder="Search Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-3 row row-cols-3">
          {albums.map((album, i) => {
            return (
              <Card bg='dark' style={{ color: 'green' }}>
                <Card.Img src={album.images[0].url} />
                <Card.Link href={album.external_urls.spotify} style={{ color: 'red' }} target="_blank">Listen</Card.Link>
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Rating />
                  <form>
                    <label htmlFor="exampleFormControlTextarea1">
                      Write your review
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                    ></textarea>
                  </form>
                  <br></br>
                  <button>Save</button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SearchAlbum
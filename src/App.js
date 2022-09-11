import "./App.css";
import SearchAlbum from "./pages/SearchAlbums";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import { Navbar } from "react-bootstrap";
import Login from "./components/Login";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/home":
      Component = SearchAlbum;
      break;
    case "/explore":
      Component = Explore;
      break;
    case "/profile":
      Component = Profile;
      break;
      case "/login":
        Component = Login;
        break;
      default:
        Component = SearchAlbum
  }

  return (
    <div className="App">
      <Navbar />
      <Component />
    </div>
  );
}

export default App;

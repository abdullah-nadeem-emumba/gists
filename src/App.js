import "./App.css";
import Header from "./layout/Header/Header";
import Container from "./layout/AppContainer/Container";
import LandingScreen from "./screens/LandingScreen";
import GistScreen from "./screens/GistScreen";
import CreateGist from "./screens/CreateGist";
import UserProfile from "./screens/UserProfile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/create" element={<CreateGist />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/gistdetails" element={<GistScreen />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

import { useMemo, useState } from "react";
import "./App.css";
import Header from "./layout/Header/Header";
import Container from "./layout/AppContainer/Container";
import LandingScreen from "./screens/LandingScreen";
import GistScreen from "./screens/GistScreen";
import CreateGist from "./screens/CreateGist";
import UserProfile from "./screens/UserProfile";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/ProtectedRoute/Protected";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <UserContext.Provider value={providerValue}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route
              path="/create"
              element={<Protected Component={CreateGist} />}
            />
            <Route
              path="/profile"
              element={<Protected Component={UserProfile} />}
            />
            <Route path="/gistdetails" element={<GistScreen />} />
          </Routes>
        </Container>
      </UserContext.Provider>
    </div>
  );
}

export default App;

import { useMemo, useState } from "react";
import "./App.css";
import Root from "./layout/Root/Root";
import Header from "./layout/Header/Header";
import Container from "./layout/AppContainer/Container";
import LandingScreen from "./screens/LandingScreen";
import GistScreen from "./screens/GistScreen";
import CreateGist from "./screens/CreateGist";
import UserProfile from "./screens/UserProfile";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/ProtectedRoute/Protected";
import { UserContext } from "./contexts/UserContext";
import { SearchContext } from "./contexts/SearchContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [searchResult, setSearchResult] = useState("");
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <UserContext.Provider value={providerValue}>
        <SearchContext.Provider value={{ searchResult, setSearchResult }}>
          <Routes>
            <Route
              path="/"
              element={<Root Header={Header} Content={LandingScreen} />}
            />
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
        </SearchContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

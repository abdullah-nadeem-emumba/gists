import "./App.css";
import Header from "./layout/Header/Header";
import Container from "./layout/AppContainer/Container";
import LandingScreen from "./screens/LandingScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <LandingScreen />
      </Container>
    </div>
  );
}

export default App;

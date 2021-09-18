import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import { CoffeeProvider } from "./context/Coffee/CoffeeContext";

function App() {
  return (
    <CoffeeProvider>
      <Container />
    </CoffeeProvider>
  );
}

export default App;

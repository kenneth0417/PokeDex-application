import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import PokeDetails from "./components/PokeDetails";

function App() {
  return (
    <>
      <PokemonProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<PokeDetails />} />
          </Routes>
        </Router>
      </PokemonProvider>
    </>
  );
}

export default App;

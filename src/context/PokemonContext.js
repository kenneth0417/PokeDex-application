import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const [selectPokemon, setSelectPokemon] = useState("");

  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const [nextPage, setNextPage] = useState("");

  const [previousPage, setPreviousPage] = useState("");

  const getPokedex = async () => {
    const res = await axios.get(`${currentPage}`);
    setPokedex(res.data.results);
    setNextPage(res.data.next);
    setPreviousPage(res.data.previous);
  };

  useEffect(() => {
    getPokedex();
  }, [currentPage, previousPage]);

  return (
    <PokemonContext.Provider
      value={{
        pokemon: [pokedex, setPokedex],
        select: [selectPokemon, setSelectPokemon],
        next: [nextPage, setNextPage],
        previous: [previousPage, setPreviousPage],
        current: [currentPage, setCurrentPage],
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;

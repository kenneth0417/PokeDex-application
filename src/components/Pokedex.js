import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PokemonContext from "../context/PokemonContext";

import { Grid, Paper, Container, Button } from "@material-ui/core";

import "../styles/index.scss";

const Pokedex = () => {
  const { pokemon, select, next, previous, current } =
    useContext(PokemonContext);

  const [pokedex, setPokedex] = pokemon;

  const [selectPokemon, setSelectPokemon] = select;

  const [nextPage, setNextPage] = next;

  const [previousPage, setPreviousPage] = previous;

  const [currentPage, setCurrentPage] = current;

  const handleNext = () => {
    setCurrentPage(nextPage);
  };

  const handlePrevious = () => {
    setCurrentPage(previousPage);
  };

  return (
    <main>
      <Container className="pokedex__container">
        <Grid container spacing={4}>
          {pokedex.map((pokemon, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="pokedex__card"
              key={idx}
              onClick={() => setSelectPokemon(pokemon.name)}
              style={{
                textAlign: "center",
              }}
            >
              <Paper>
                <Link
                  to={`/pokemon/${pokemon.name}`}
                  className="pokedex__link"
                  style={{ padding: "15px" }}
                >
                  {pokemon.name}
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="pokedex__button">
        {previousPage !== null ? (
          <Button variant="contained" onClick={handlePrevious}>
            Previous
          </Button>
        ) : (
          <></>
        )}
        {nextPage !== null ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default Pokedex;

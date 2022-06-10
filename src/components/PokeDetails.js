import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CircularProgress,
  Grid,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import PokemonContext from "../context/PokemonContext";
import axios from "axios";
import "../styles/index.scss";

const PokeDetails = () => {
  const { select } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);

  const [selectPokemon, setSelectPokemon] = select;

  const [pokemonInfo, setPokemonInfo] = useState([]);

  const getPokemonInfo = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectPokemon}`
    );
    console.log(res.data);
    setPokemonInfo(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);
  return (
    <section>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid container spacing={2} style={{ marginBottom: "30px" }}>
            <Grid item xs={3} md={2} lg={2}>
              <img
                src={pokemonInfo.sprites.front_default}
                alt={pokemonInfo.name}
                style={{
                  minWidth: "100%",
                  minHeight: "100%",
                  border: "2px solid #000",
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid item xs={9} md={1} lg={1} />

            <Grid
              item
              xs={3}
              md={1}
              lg={1}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: "700", marginBottom: "10px" }}
              >
                Name
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: "700", marginBottom: "10px" }}
              >
                Type
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: "700", marginBottom: "10px" }}
              >
                Abilities
              </Typography>
            </Grid>
            <Grid
              item
              xs={9}
              md={8}
              lg={8}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" style={{ marginBottom: "10px" }}>
                {pokemonInfo.name}
              </Typography>
              <Typography variant="h5" style={{ marginBottom: "10px" }}>
                {pokemonInfo.types.map((type) => type.type.name).toString()}
              </Typography>
              <Typography variant="h5" style={{ marginBottom: "10px" }}>
                {pokemonInfo.abilities
                  .map((ability) => ability.ability.name)
                  .toString()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Stats</Typography>
            </Grid>
            <Grid item xs={3} md={2} lg={2}>
              {pokemonInfo.stats.map((stats, idx) => (
                <Typography
                  variant="h5"
                  style={{ fontWeight: "700", marginBottom: "10px" }}
                  key={idx}
                >
                  {stats.stat.name}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={9} md={9} lg={10}>
              {pokemonInfo.stats.map((stats, idx) => (
                <Typography
                  variant="h5"
                  key={idx}
                  style={{ marginBottom: "10px" }}
                >
                  {stats.base_stat}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </>
      )}
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </section>
  );
};

export default PokeDetails;

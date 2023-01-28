import React from "react";
import { Grid } from "@mui/material";

import { Pokemon } from "../../types/Pokemon";

export interface IPokemonGridProps {
  pokemons: Pokemon[];
}

export const PokemonGrid = ({ pokemons }: IPokemonGridProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {pokemons.map((pokemon, index) => (
        <Grid key={`${index}-${pokemon.name}`} item xs={2}>
          {pokemon.name}
        </Grid>
      ))}
    </Grid>
  );
};

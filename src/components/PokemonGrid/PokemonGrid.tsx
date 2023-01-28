import React from "react";
import { Grid } from "@mui/material";

import { Pokemon } from "../../types/Pokemon";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export interface IPokemonGridProps {
  pokemons: Pokemon[];
}

export const PokemonGrid = ({ pokemons }: IPokemonGridProps) => {
  return (
    <Grid container>
      {pokemons.map((pokemon, index) => (
        <Grid key={`${index}-${pokemon.name}`} item>
          {pokemon.name}
        </Grid>
      ))}
    </Grid>
  );
};

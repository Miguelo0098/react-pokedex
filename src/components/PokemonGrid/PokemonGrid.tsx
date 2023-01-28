import React from "react";
import { Grid } from "@mui/material";
import { Pokemon } from "pokenode-ts";
import { PokemonCard } from "../PokemonCard/PokemonCard";

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
      {pokemons.map((pokemon, index) => {
        const types = pokemon.types.map((type) => type.type.name);

        return (
          <Grid key={`${index}-${pokemon.name}`} item xs={2}>
            <PokemonCard
              image={pokemon.sprites.front_default}
              name={pokemon.name}
              types={types.join("-")}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

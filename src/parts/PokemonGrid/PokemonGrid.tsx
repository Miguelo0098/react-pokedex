import React from "react";
import { Grid } from "@mui/material";
import { Pokemon } from "pokenode-ts";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { SkeletonCard } from "./components/SkeletonCard/SkeletonCard";

const LOADING_ARRAY = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

export interface IPokemonGridProps {
  pokemons: Pokemon[];
  loading?: boolean;
}

export const PokemonGrid = ({ pokemons, loading }: IPokemonGridProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      rowSpacing={{ xs: 5, md: 8 }}
      columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}
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
      {loading &&
        LOADING_ARRAY.map(() => (
          <Grid item xs={2}>
            <SkeletonCard />
          </Grid>
        ))}
    </Grid>
  );
};

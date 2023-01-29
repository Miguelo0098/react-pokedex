import React from "react";
import { Box } from "@mui/material";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";
import { useParams } from "react-router-dom";

export interface IPokemonDetailPageProps {}

export const PokemonDetailPage = (props: IPokemonDetailPageProps) => {
  const { pokemonName } = useParams();

  if (!pokemonName) {
    throw new Error("Pokemon name was not found inside url params");
  }

  return (
    <Box component={"section"}>
      <PokemonDetails pokemonName={pokemonName} />
    </Box>
  );
};

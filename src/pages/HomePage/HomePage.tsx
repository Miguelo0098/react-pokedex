import React from "react";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { Box, Typography } from "@mui/material";

export interface IHomePageProps {}

export const HomePage = (props: IHomePageProps) => {
  return (
    <Box component={"section"}>
      <Typography component="h1" variant="h4">
        {"Pokémons"}
      </Typography>
      <PokemonList />
    </Box>
  );
};

import React from "react";
import { Box } from "@mui/material";

import { PokemonList } from "./components/PokemonList/PokemonList";
import { CategoryHeaderText } from "./HomePage.styled";

export interface IHomePageProps {}

export const HomePage = (props: IHomePageProps) => {
  return (
    <Box component={"section"}>
      <CategoryHeaderText component="h1" variant="h3">
        {"POKÉMONS"}
      </CategoryHeaderText>
      <PokemonList />
    </Box>
  );
};

import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";

import { StyledPokemonName } from "./PokemonCard.styled";
import { PokemonImage } from "../../../../components/PokemonImage/PokemonImage";

export interface IPokemonCardProps {
  image: string | null;
  name: string;
  types: string;
}

export const PokemonCard = ({ image, name, types }: IPokemonCardProps) => {
  return (
    <Link
      component={ReactRouterLink}
      underline="none"
      color="inherit"
      to={`/pokemon/${name}`}
    >
      <Box>
        <PokemonImage
          image={image ?? undefined}
          name={name}
          height={180}
          width={180}
        />
        <StyledPokemonName component={"h2"} variant="h5">
          {name.toUpperCase()}
        </StyledPokemonName>
        <Typography component={"h3"} variant="h6" color="primary">
          {types}
        </Typography>
      </Box>
    </Link>
  );
};

import React from "react";

import { Box, CardMedia, Typography, Link } from "@mui/material";
import { CardWithBackround } from "./PokemonCard.styled";
import { Link as ReactRouterLink } from "react-router-dom";

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
        <CardWithBackround>
          <CardMedia
            image={image ?? undefined}
            title={name}
            sx={{ height: 190, width: 180 }}
          />
        </CardWithBackround>
        <Typography component={"h2"} variant="h5">
          {name}
        </Typography>
        <Typography component={"h3"} variant="body1">
          {types}
        </Typography>
      </Box>
    </Link>
  );
};

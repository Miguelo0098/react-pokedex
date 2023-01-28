import React from "react";

import { Box, CardMedia, Typography } from "@mui/material";
import { CardWithBackround } from "./PokemonCard.styled";

export interface IPokemonCardProps {
  image: string | null;
  name: string;
  types: string;
}

export const PokemonCard = ({ image, name, types }: IPokemonCardProps) => {
  return (
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
  );
};

import React from "react";

import { Box, Card, CardMedia, Typography } from "@mui/material";

export interface IPokemonCardProps {
  image: string;
  name: string;
  nature: string;
}

export const PokemonCard = ({ image, name, nature }: IPokemonCardProps) => {
  return (
    <Box>
      <Card>
        <CardMedia image={image} title={name} />
      </Card>
      <Typography component={"h2"} variant="h4">
        {name}
      </Typography>
      <Typography component={"h3"} variant="h5">
        {nature}
      </Typography>
    </Box>
  );
};

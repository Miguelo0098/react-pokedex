import React from "react";
import { CardMedia } from "@mui/material";

import { CardWithBackround } from "./PokemonImage.styled";

export interface IPokemonImageProps {
  image?: string;
  name: string;
  height: number;
  width: number;
}

export function PokemonImage({
  image,
  name,
  height,
  width,
}: IPokemonImageProps) {
  return (
    <CardWithBackround>
      <CardMedia image={image} title={name} sx={{ height, width }} />
    </CardWithBackround>
  );
}

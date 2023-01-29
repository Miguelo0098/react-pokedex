import React from "react";
import { Card, Grid, Typography } from "@mui/material";

import { StyledPokemonName } from "./PokemonInfo.styled";
import { PokemonImage } from "../../components/PokemonImage/PokemonImage";

export interface IPokemonInfoProps {
  image: string | null;
  name: string;
  types: string;
}

export const PokemonInfo = ({ image, name, types }: IPokemonInfoProps) => {
  return (
    <Grid container columns={{ xs: 2, md: 4 }} spacing={{ xs: 2, md: 4 }}>
      <Grid item xs={2}>
        <PokemonImage
          image={image ?? undefined}
          name={name}
          height={269}
          width={388}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography component={"h2"} variant="h5">
          {name.toUpperCase()}
        </Typography>
        <Typography component={"h3"} variant="h6" color="primary">
          {types}
        </Typography>
        <Card>
          <Typography component={"h4"}>{"More stats"}</Typography>
          <Typography component={"h4"}>{"Base Experience: "}</Typography>
          <Typography component={"h4"}>{"Height: "}</Typography>
          <Typography component={"h4"}>{"Order: "}</Typography>
          <Typography component={"h4"}>{"Weight: "}</Typography>
          <Typography component={"h4"}>{"Abilitiies: "}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

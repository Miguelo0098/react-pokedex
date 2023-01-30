import React from "react";
import { Grid, Skeleton, Typography } from "@mui/material";

import {
  MoreStatsText,
  StatsCard,
  PokemonName,
  PokemonTypes,
} from "./PokemonInfo.styled";
import { PokemonImage } from "../../components/PokemonImage/PokemonImage";

export interface IPokemonInfoProps {
  image?: string | null;
  name?: string;
  types?: string;
  baseExperience?: number;
  height?: number;
  weight?: number;
  order?: number;
  abilities?: string;
}

export const PokemonInfo = ({
  image,
  name,
  types,
  baseExperience,
  height,
  weight,
  abilities,
  order,
}: IPokemonInfoProps) => {
  const stats = [
    {
      name: "Base Experience",
      value: baseExperience,
    },
    {
      name: "Height",
      value: height,
    },
    {
      name: "Order",
      value: order,
    },
    {
      name: "Weight",
      value: weight,
    },
    {
      name: "Abilities",
      value: abilities,
    },
  ];

  return (
    <Grid
      container
      columns={{ xs: 2, md: 4 }}
      spacing={{ xs: 2, md: 12 }}
      sx={{ minHeight: "100%" }}
    >
      <Grid item xs={2}>
        {image && name ? (
          <PokemonImage
            image={image ?? undefined}
            name={name}
            height={269}
            width={269}
          />
        ) : (
          <Skeleton variant="rectangular" height={269} />
        )}
      </Grid>
      <Grid item xs={2}>
        <PokemonName component={"h1"} variant="h5">
          {name ? name.toUpperCase() : <Skeleton />}
        </PokemonName>
        <PokemonTypes component={"h2"} variant="h6" color="primary">
          {types ? types : <Skeleton />}
        </PokemonTypes>
        <StatsCard>
          <Grid container columns={{ xs: 2 }} spacing={{ xs: 1 }}>
            <Grid item xs={2}>
              <MoreStatsText component={"h3"} variant="h4">
                {"More stats"}
              </MoreStatsText>
            </Grid>
            {stats.map((stat) => (
              <Grid key={stat.name} item xs={2}>
                <Typography variant="body1">
                  {`${stat.name}: `}
                  <Typography
                    component={"span"}
                    variant="body2"
                    color="secondary"
                  >
                    {stat.value ? stat.value : <Skeleton />}
                  </Typography>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </StatsCard>
      </Grid>
    </Grid>
  );
};

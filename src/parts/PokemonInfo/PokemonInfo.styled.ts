import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const PokemonName = styled(Typography)(({ theme }) => ({
  paddingBottom: "4px",
}));

export const PokemonTypes = styled(Typography)(({ theme }) => ({
  paddingBottom: "16px",
}));

export const MoreStatsText = styled(Typography)(({ theme }) => ({
  paddingBottom: "12px",
}));

export const StatsCard = styled(Card)(({ theme }) => ({
  padding: "24px 16px",
  backgroundColor: "black",
  color: "white",
}));

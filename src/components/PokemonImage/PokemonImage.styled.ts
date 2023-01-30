import { Card } from "@mui/material";
import { styled } from "@mui/system";

import backgroundImage from "../../assets/background.jpg";

export const CardWithBackround = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  display: "grid",
  placeItems: "center",
  height: "100%",
}));

import { AppBar } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const Logo = styled("img")(({ theme }) => ({
  height: "23px",
  width: "165px",
}));

export const LinkLogoWrapper = styled(Link)(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  height: "53px",
  [theme.breakpoints.up("sm")]: {
    width: "165px",
    marginLeft: "10%",
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "none",
  borderBottom: "1px solid #F0EEEF",
}));

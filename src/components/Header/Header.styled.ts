import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/system";

export const Logo = styled("img")(({ theme }) => ({
  height: "23px",
  width: "165px",
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  maxWidth: "428px",
  height: "53px",
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "none",
  borderBottom: "1px solid #F0EEEF",
}));

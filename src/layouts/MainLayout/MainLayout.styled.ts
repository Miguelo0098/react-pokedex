import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  padding: "25px 16px",
  [theme.breakpoints.up("sm")]: {
    padding: "18px 10% 14px 10%",
  },
}));

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledMainWrapper = styled(Box)(({ theme }) => ({
  padding: "40px 16px",
  [theme.breakpoints.up("sm")]: {
    padding: "75px 10% 14px 10%",
  },
}));

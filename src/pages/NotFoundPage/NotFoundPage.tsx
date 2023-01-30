import { Box, Typography } from "@mui/material";
import React from "react";

export interface INotFoundPageProps {}

export function NotFoundPage(props: INotFoundPageProps) {
  return (
    <Box component={"section"}>
      <Typography variant="h1">{"404"}</Typography>
      <Typography variant="h2" color={"primary"}>
        {"Page not found"}
      </Typography>
    </Box>
  );
}

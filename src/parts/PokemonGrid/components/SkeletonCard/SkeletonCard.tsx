import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";

export interface ISkeletonCardProps {}

export function SkeletonCard(props: ISkeletonCardProps) {
  return (
    <Box>
      <Skeleton variant="rectangular" height={180} />
      <Typography variant="h5">
        <Skeleton />
      </Typography>
      <Typography variant="h6">
        <Skeleton />
      </Typography>
    </Box>
  );
}

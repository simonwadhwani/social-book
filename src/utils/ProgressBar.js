import React from "react";
import { Backdrop, LinearProgress, Typography } from "@mui/material";

export default function ProgressBar({ isVisible, progressBarMessage }) {
  return (
    <div>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 500,
          color: "white",
        }}
        open={isVisible}
      >
        <div>
          <LinearProgress />
          <Typography mt={2}>{progressBarMessage}</Typography>
        </div>
      </Backdrop>
    </div>
  );
}

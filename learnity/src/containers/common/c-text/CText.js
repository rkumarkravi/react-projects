import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

function CText(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        {props.value}
    </Box>
  );
}

export default CText;

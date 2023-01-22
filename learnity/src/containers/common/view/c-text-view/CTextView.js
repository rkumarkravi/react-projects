import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

function CText(props) {
  return (
    <Box
      sx={{...JSON.parse(props?.style),
        width: "98%",
        height: "auto",
        padding: "0.5em",
        backgroundColor: "primary.dark",
      }}
    >
        {props.value}
    </Box>
  );
}

export default CText;

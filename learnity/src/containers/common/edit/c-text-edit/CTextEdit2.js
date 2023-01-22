import React, { forwardRef } from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "./../../../../config/Theme";

function CTextEdit2(propsData, ref) {
  const props = propsData.data;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        onClick={propsData.onClick}
        ref={ref}
        contentEditable
        sx={{
          minWidth: "98%",
          height: "auto",
          padding: "0.5em",
          backgroundColor: "primary.dark",
          position: "relative",
          ...JSON.parse(props?.style),
        }}
        suppressContentEditableWarning={true}
      >
        {props.value}
      </Box>
    </ThemeProvider>
  );
}

export default forwardRef(CTextEdit2);

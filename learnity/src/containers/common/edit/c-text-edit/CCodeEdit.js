import React, { forwardRef } from "react";
import Box from "@mui/material/Box";

function CCodeEdit(propsData, ref) {
    const props=propsData.data;
    return (
      <Box
        onClick={propsData.onClick}
        ref={ref}
        contentEditable
        sx={{
          minWidth: "98%",
          height: "auto",
          padding: "0.5em",
          backgroundColor: "primary.dark",
          ...JSON.parse(props?.style),
        }}
        suppressContentEditableWarning={true}
      >
        {props.value}
      </Box>
    );
  }
  
  export default forwardRef(CCodeEdit);
  

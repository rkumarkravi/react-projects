import React from "react";
import "./AddContent.css";
import Box from "@mui/material/Box";
export default function AddContent() {
  return (
    <div className="add-topic">
      <div className="content-container">
        <h2>Add Topic</h2>
        <div className="Content"></div>
      </div>
      <Box
        className="tools-container"
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          width: "20%",
          padding: "0!important",
        }}
      ></Box>
    </div>
  );
}

import React from 'react'
import { Button } from '@mui/material';

export default function CButton(props) {
  return (
    <Button
          onClick={props.onClick}
          className="BaseButton-root"
          sx={{...props?.sx,
            backgroundColor: "black",
            color: "white",
            "&:hover": { color: "white", backgroundColor: "#282c34" },
          }}
        >
          {props.children}
        </Button>
  )
}

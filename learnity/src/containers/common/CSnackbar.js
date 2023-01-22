import { Alert, Slide, Snackbar } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import SnackBarContext from '../../core/contexts/SnackbarContext';

export default function CSnackbar(props,{open,severity='success',message}) {
  const value = React.useContext(SnackBarContext);
  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.onClose();
  };
  return (
    <Snackbar open={value.open} autoHideDuration={5000} onClose={handleClose} TransitionComponent={TransitionUp}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {value.msg} 
        </Alert>
      </Snackbar>
  )
}

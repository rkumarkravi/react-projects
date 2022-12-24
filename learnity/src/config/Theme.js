import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#282c34',
      },
      paper: {
        main: '#ffffff',
      },
      sidebar:{
        background:'#ffffff'
      },
      topics:{
        node:{
          background:'#111111',
          foreground:'#ffffff'
        },
        subnode:{
          background:'#282c34',
          foreground:'#398304'
        }
      }
    },
  });

export default defaultTheme;
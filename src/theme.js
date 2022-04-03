import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#DE4D40',
    },
    secondary: {
      main: '#A7A7A7',
    },
    background: {
      default: '#fff',
      paper: '#EFEFEF',
    },
    text: {
      primary: '#333333',
    },
    info: {
      main: '#7594A5',
    },
    accent: {
      main: '#7594A5',
    },
    divider: '#E9E9E9',
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#DE4D40',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h4: {
      fontSize: '1rem',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderRadius: 0,
          textTransform: 'unset',
          boxShadow: 'unset',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          maxWidth: '50px',

          "fieldset" : {
           borderRadius: 0,
            padding: 0,
          },

          "input" : {
            padding: '5px 0',
            textAlign: 'right',
            height: '30px'
          }
        },
      },
    },
  }

});

export default theme;

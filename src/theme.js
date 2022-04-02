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
      main: '#678A9D',
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
    MuiAppBar: {
      color: 'transparent',
    },
  },

});

export default theme;

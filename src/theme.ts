import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#461b82',
    },
    secondary: {
      main: '#3c3c38',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Montserrat"
  }
});

export default theme;

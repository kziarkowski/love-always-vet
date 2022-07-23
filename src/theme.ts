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
    fontFamily: "Montserrat",
    h1: {
      fontSize: "30px",
      fontWeight: "300",
      color: "#111111",
      textAlign: "center",
      textDecoration: "underline",
      textDecorationColor: "#461b82",
      textDecorationThickness: "2px",
      textUnderlineOffset: "7px"
    }
  }
});

export default theme;

import { createTheme, PaletteColorOptions } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface PaletteOptions {
    tertiary: PaletteColorOptions;
  }
}

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#004643",
      contrastText: "#f3efde"
    },
    secondary: {
      main: "#7daaa2",
      contrastText: "#fff"
    },
    tertiary: defaultTheme.palette.augmentColor({
      color: {
        main: "#f3efde",
        contrastText: "#000"
      },
      name: "tertiary"
    })
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    fontFamily: "Classico, Arial",
    fontSize: 15,
    h1: {
      fontWeight: 400
    },
    h2: {
      fontWeight: 400
    },
    h3: {
      fontWeight: 400
    },
    h4: {
      fontWeight: 400
    },
    h5: {
      fontWeight: 400
    },
    h6: {
      fontWeight: 400
    }
  }
});

export default theme;

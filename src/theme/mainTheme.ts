import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#A10B25",
    },
    secondary: {
      main: "#F6F588",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "18px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "16px",
      fontWeight: 700,
    },
    h6: {
      fontSize: "14px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "12.56px",
      fontWeight: 600,
    },
    body2: {
      fontSize: "12.56px",
      fontWeight: 500,
    },
  },
});

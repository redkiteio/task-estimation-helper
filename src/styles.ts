import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h4: {
      fontSize: "28px",
      color: "#6DA5E7",
      fontWeight: 700,
      marginBottom: "30px",
    },
    body2: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: "8px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: "capitalize",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          padding: "12px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          height: "36px",
          width: "90px",
          minWidth: "90px",
          padding: 0,
          marginLeft: "8px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#6DA5E7",
    },
  },
});

export const useMainStyles = makeStyles({
  footerGrid: {
    boxShadow: "0px 0px 10px rgba(102, 102, 102, 0.25)",
    background: "#FFFFFF",
  },
  mainGrid: {
    borderRadius: "12px",
    background: "#FFFFFF",
    border: "1px solid #F0F4F9",
    borderBottom: "unset",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: 0,
  },
  grid: {
    borderRadius: "8px",
    backgroundColor: "#EEEEEE",
  },
  input: {
    border: "unset",
    color: "#6DA5E7",
    fontSize: "16px",
    fontWeight: 700,
    padding: "2px",
    textAlign: "center",
    borderColor: "transparent",
  },
  textarea: {
    height: "120px !important",
    resize: "none",
    width: "100%",
    paddingRight: "16px",
    paddingLeft: "16px",
    fontSize: "12px",
    borderColor: "rgba(0, 0, 0, 0.23)",
    paddingBottom: "10px",
    paddingTop: "10px",
    fontWeight: 400,
    color: "#1C1B23",
    boxSizing: "border-box",
    borderRadius: "8px",
    backgroundColor: "#FBFBFB",
    overflow: "auto !important",
    "&:focus": {
      borderColor: "rgb(114 114 114 / 87%)",
      outline: "none",
    },
  },
  timeField: {
    width: "40%",
  },
  errorText: {
    color: "red !important",
  },
  invisibleButton: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
});

import { withStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";

export const Field = withStyles(() => ({
  root: {
    minWidth: "90px",
    "& .MuiInputBase-root": {
      height: "100%",
      width: "100%",
      fontSize: "12px",
      "&.Mui-disabled": {
        opacity: 0.5,
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(114 114 114 / 87%)",
        },
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(114 114 114 / 87%)",
          borderWidth: "1px",
        },
      },
      "& input": {
        borderColor: "#EEEEEE",
        width: "100%",
        height: "100%",
        paddingRight: "35px",
        paddingLeft: "10px",
        paddingBottom: "10px",
        paddingTop: "10px",
        fontWeight: 700,
        borderRadius: "8px",
        color: "#000000",
        boxSizing: "border-box",
        backgroundColor: "#FBFBFB",
      },
    },
    "& .MuiFormHelperText-root": {
      fontWeight: 700,
      color: "#1C1B23",
      position: "absolute",
      right: "8px",
      bottom: 0,
      top: 0,
      height: "fit-content",
      marginBottom: "auto",
      marginTop: "auto",
      marginLeft: 0,
      marginRight: 0,
      fontSize: "12px",
      "&.Mui-disabled": {
        color: "#1C1B23",
        opacity: 0.5,
      },
    },
  },
}))(TextField);

export const TotalField = withStyles(() => ({
  root: {
    minWidth: "130px !important",
    width: "fit-content",
    "& .MuiInputBase-root": {
      height: "100%",
      width: "100%",
      fontSize: "16px",
      "&.Mui-disabled": {
        fontWeight: 700,
        color: "#6DA5E7",
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(114 114 114 / 87%)",
        },
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(114 114 114 / 87%)",
          borderWidth: "1px",
        },
      },
      "& input": {
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        padding: "9px",
        fontWeight: 700,
        color: "#6DA5E7",
        boxSizing: "border-box",
        backgroundColor: "#FBFBFB",
        textAlign: "center",
        "&.Mui-disabled": {
          ["-webkitTextFillColor"]: "#6DA5E7",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #6DA5E7 !important",
        borderRadius: "8px",
      },
    },
  },
}))(TextField);

export const MuiButton = withStyles(() => ({
  root: {
    backgroundColor: `#6DA5E7 !important`,
    width: "fit-content",
    marginRight: 0,
  },
}))(Button);

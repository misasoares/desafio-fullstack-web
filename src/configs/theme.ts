import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "lightgray",
            },
            "&:hover fieldset": {
              borderColor: "lightgray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "lightgray",
            },
          },
          "& .MuiInputBase-root": {
            borderColor: "lightgray",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiInputLabel-root:hover": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;

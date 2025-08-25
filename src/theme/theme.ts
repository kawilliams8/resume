import { createTheme } from "@mui/material/styles";

export const createLightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: `linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)`,
      paper: "#ebecfc",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(#fdfdfd, #fdfdfd) padding-box, linear-gradient(135deg, rgba(6, 182, 212, 0.5) 0%, rgba(139, 92, 246, 0.9) 50%) border-box",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          background: "#ffffff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "magenta",
        },
      },
    },
  },
});

export const createDarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default:
        "linear-gradient(135deg, #0f0b27 0%, #1a0d3d 25%, #2d1b69 50%, #4a1c7a 75%, #6b1e7f 100%)",
      paper: "#282c34",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(#fdfdfd, #fdfdfd) padding-box, linear-gradient(135deg,  #6b1e7f 0%,  #4a1c7a 25%, #2d1b69 50%, #1a0d3d 75%, #0f0b27 100%) border-box",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          background: "#282c34", // match the CodeBlock background
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "magenta",
        },
      },
    },
  },
});

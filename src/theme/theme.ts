import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    skills: {
      gradientColors: {
        primary: string;
        secondary: string;
      };
      getDropZoneColor: (categoryId: string) => string;
      dragPreviewBackground: string;
    };
  }

  interface ThemeOptions {
    skills?: {
      gradientColors?: {
        primary?: string;
        secondary?: string;
      };
      getDropZoneColor?: (categoryId: string) => string;
      dragPreviewBackground?: string;
    };
  }
}

export const createLightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: `linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)`,
      paper: "#ebecfc",
    },
  },
  skills: {
    gradientColors: {
      primary: "#8b5cf6",
      secondary: "#06b6d4",
    },
    getDropZoneColor: (categoryId: string) => {
      switch (categoryId) {
        case "frontend":
          return "rgba(139, 92, 246, 0.8)";
        case "backend":
          return "rgba(6, 182, 212, 0.8)";
        case "tools":
          return "rgba(59, 130, 246, 0.8)";
        default:
          return "rgba(139, 92, 246, 0.8)";
      }
    },
    dragPreviewBackground: "rgba(255, 255, 255, 0.95)",
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
  skills: {
    gradientColors: {
      primary: "#c084fc",
      secondary: "#7dd3fc",
    },
    getDropZoneColor: (categoryId: string) => {
      switch (categoryId) {
        case "frontend":
          return "#6b1e7f";
        case "backend":
          return "#2d1b69";
        case "tools":
          return "#0f0b27";
        default:
          return "#6b1e7f";
      }
    },
    dragPreviewBackground: "rgba(18, 18, 18, 0.95)",
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

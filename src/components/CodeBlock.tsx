import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { highlightSyntax } from "../utils";
import { BlueScreenOfDeath } from "../components/BlueScreenOfDeath";
import { EasterEggMessages } from "./EasterEggMessages";
import { MinimizedWindow } from "./MinimizedWindow";

interface CodeBlockProps {
  code: string;
  title: string;
}

type WindowState = "normal" | "closed" | "minimized";

const COLORS = {
  dots: {
    red: "#ff5f56",
    yellow: "#ffbd2e",
    green: "#27c93f",
  },
  background: {
    normal: "#282c34",
    bsod: "#0078d4",
  },
} as const;

const RESPONSIVE_WIDTHS = {
  xs: "275px",
  sm: "500px",
  md: "650px",
  lg: "550px",
} as const;

const TIMEOUTS = {
  close: 3000,
  minimize: 5000,
  message: 3000,
} as const;

const DOT_ACTIONS = {
  [COLORS.dots.red]: {
    label: "Close window (shows blue screen)",
    action: "close",
    description: "Close editor window",
  },
  [COLORS.dots.yellow]: {
    label: "Minimize window",
    action: "minimize",
    description: "Minimize editor window",
  },
  [COLORS.dots.green]: {
    label: "Easter egg",
    action: "easter-egg",
    description: "Maximize editor with secret message",
  },
} as const;

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  const [windowState, setWindowState] = React.useState<WindowState>("normal");
  const [showMessage, setShowMessage] = React.useState(false);

  const handleDotClick = React.useCallback((dotColor: string) => {
    if (dotColor === COLORS.dots.red) {
      setWindowState("closed");
      setTimeout(() => setWindowState("normal"), TIMEOUTS.close);
    } else if (dotColor === COLORS.dots.yellow) {
      setWindowState("minimized");
      setTimeout(() => setWindowState("normal"), TIMEOUTS.minimize);
    } else if (dotColor === COLORS.dots.green) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), TIMEOUTS.message);
    }
  }, []);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent, dotColor: string) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleDotClick(dotColor);
      }
    },
    [handleDotClick]
  );

  const getWindowStateAnnouncement = () => {
    switch (windowState) {
      case "closed":
        return "Code window closed, showing blue screen of death";
      case "minimized":
        return "Code window minimized";
      case "normal":
        return "Code window restored to normal view";
      default:
        return "";
    }
  };

  const renderDots = () => (
    <div role="group" aria-label="Window controls">
      {Object.entries(COLORS.dots).map(([_, color]) => {
        const dotAction = DOT_ACTIONS[color];
        return (
          <button
            key={color}
            style={{
              ...dotStyle(color),
              cursor: "pointer",
              border: "none",
              padding: 0,
              margin: 3,
              outline: "none",
            }}
            onClick={() => handleDotClick(color)}
            onKeyDown={(e) => handleKeyDown(e, color)}
            aria-label={dotAction.label}
            title={dotAction.description}
            tabIndex={0}
            onFocus={(e) => {
              e.target.style.outline = "2px solid #0066cc";
              e.target.style.outlineOffset = "2px";
            }}
            onBlur={(e) => {
              e.target.style.outline = "none";
            }}
          >
            <span aria-hidden="true"></span>
          </button>
        );
      })}
    </div>
  );

  return (
    <Box
      style={{
        ...containerStyle,
        backgroundColor:
          windowState === "closed"
            ? COLORS.background.bsod
            : COLORS.background.normal,
        height: windowState === "minimized" ? "80px" : "450px",
        transition: "height 0.3s ease-in-out",
        marginBottom: windowState === "minimized" ? "30px" : "10px",
      }}
      sx={{
        maxWidth: RESPONSIVE_WIDTHS,
        position: "relative",
      }}
      role="region"
      aria-label={`Code block: ${title}`}
    >
      {/* Screen reader announcements for state changes */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        {getWindowStateAnnouncement()}
      </div>

      <header style={headerStyle}>
        <Stack sx={{ width: { xs: "30%", sm: "15%" } }}>{renderDots()}</Stack>
        <Stack sx={{ width: "70%", mr: "15%" }}>
          <Typography component="h3" color="black" aria-level={3}>
            {title}
          </Typography>
        </Stack>
      </header>

      {showMessage && windowState === "normal" && <EasterEggMessages />}

      <main
        style={{
          ...windowStyle,
          backgroundColor:
            windowState === "closed"
              ? COLORS.background.bsod
              : COLORS.background.normal,
          borderRadius: "7px",
        }}
        aria-label="Code content"
      >
        {windowState === "closed" && (
          <Box
            sx={{
              width: RESPONSIVE_WIDTHS,
            }}
            role="alert"
            aria-label="Blue screen of death error message"
          >
            <BlueScreenOfDeath />
          </Box>
        )}
        {windowState === "minimized" && (
          <Box
            sx={{
              width: RESPONSIVE_WIDTHS,
            }}
            role="status"
            aria-label="Window minimized"
          >
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "25px",
              }}
            >
              <MinimizedWindow />
            </div>
          </Box>
        )}
        {windowState === "normal" && (
          <pre
            style={preStyle}
            role="code"
            aria-label={`Code snippet: ${title}`}
            tabIndex={0}
          >
            <code>{highlightSyntax(code)}</code>
          </pre>
        )}
      </main>
    </Box>
  );
};

const windowStyle: React.CSSProperties = {
  overflow: "scroll",
  maxHeight: "410px",
};

const containerStyle: React.CSSProperties = {
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  fontFamily: "monospace",
  backgroundColor: "#282c34",
  color: "#f8f8f2",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  height: "450px",
  margin: "5px 10px",
  lineHeight: "1.25",
};

const headerStyle: React.CSSProperties = {
  height: "32px",
  backgroundColor: "#e0e0e0",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  gap: "8px",
  borderRadius: "7px 7px 0 0",
};

const dotStyle = (color: string): React.CSSProperties => ({
  height: "12px",
  width: "14px",
  borderRadius: "50%",
  backgroundColor: color,
  display: "inline-block",
});

const preStyle: React.CSSProperties = {
  margin: 0,
  padding: "10px 20px",
  overflowX: "auto",
  textAlign: "left",
};

import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { BlueScreenOfDeath } from "../components/BlueScreenOfDeath";
import { EasterEggMessages } from "./EasterEggMessages";
import { MinimizedWindow } from "./MinimizedWindow";
import { Typewriter } from "./Typewriter";
import { highlightSyntax } from "@/utils";

interface CodeBlockProps {
  code: string;
  title: string;
  withTypewriter?: boolean;
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

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  title,
  withTypewriter,
}) => {
  const [windowState, setWindowState] = useState<WindowState>("normal");
  const [showMessage, setShowMessage] = useState(false);

  const handleDotClick = (dotColor: string) => {
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
  };

  const handleKeyDown = (event: React.KeyboardEvent, dotColor: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleDotClick(dotColor);
    }
  };

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
    <div role="group" aria-label="Window controls" style={{ display: "flex" }}>
      {Object.entries(COLORS.dots).map(([_, color]) => {
        const dotAction = DOT_ACTIONS[color];
        const buttonRef = React.useRef<HTMLButtonElement>(null);

        return (
          <Box
            key={color}
            onClick={() => handleDotClick(color)}
            onKeyDown={(e) => handleKeyDown(e, color)}
            sx={{
              paddingRight: 0.5,
              border: "2px red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              outline: "none",
              "&:focus": {
                outline: "none",
              },
            }}
            role="button"
            tabIndex={0}
            aria-label={dotAction.label}
            title={dotAction.description}
            onFocus={() => {
              if (buttonRef.current) {
                buttonRef.current.style.outline = "2px solid #0066cc";
                buttonRef.current.style.outlineOffset = "2px";
              }
            }}
            onBlur={() => {
              if (buttonRef.current) {
                buttonRef.current.style.outline = "none";
              }
            }}
          >
            <button
              ref={buttonRef}
              style={{
                ...dotStyle(color),
                border: "none",
                padding: 0,
                margin: 0,
                outline: "none",
                cursor: "inherit",
                pointerEvents: "none",
              }}
              aria-hidden="true"
              tabIndex={-1}
            >
              <span aria-hidden="true"></span>
            </button>
          </Box>
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
        <Stack sx={{ width: { xs: "25%", sm: "10%" } }}>{renderDots()}</Stack>
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
          <>
            {withTypewriter && <Typewriter />}
            <pre
              style={preStyle}
              role="code"
              aria-label={`Code snippet: ${title}`}
              tabIndex={0}
            >
              <code>{highlightSyntax(code)}</code>
            </pre>
          </>
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
  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
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

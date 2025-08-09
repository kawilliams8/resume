import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { highlightSyntax } from "../utils";

interface CodeBlockProps {
  code: string;
  title: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  const [windowState, setWindowState] = React.useState<
    "normal" | "closed" | "minimized"
  >("normal");
  const [showMessage, setShowMessage] = React.useState(false);

  const handleDotClick = (dotColor: string) => {
    if (dotColor === "#ff5f56") {
      // Red dot - "close"
      setWindowState("closed");
      // Reset after 3 seconds
      setTimeout(() => setWindowState("normal"), 3000);
    } else if (dotColor === "#ffbd2e") {
      // Yellow dot - "minimize"
      setWindowState("minimized");
      // Reset after 2 seconds
      setTimeout(() => setWindowState("normal"), 3000);
    } else if (dotColor === "#27c93f") {
      // Green dot - easter egg
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  const easterEggMessages = [
    "🕵️ Nice find! You're clearly detail-oriented, like me!.",
    "🎉 Easter egg activated! Hire this developer!",
    "🔍 Curiosity is a great trait in a developer, don't you think!?",
    "🚀 You found the secret! I write clean code AND enjoy fun surprises.",
    "💎 Hidden gem discovered! This developer thinks about UX.",
    "🧩 Puzzle solver detected! Perfect for our debugging sessions.",
  ];

  const randomMessage =
    easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];

  // Blue Screen of Death component
  const BlueScreenOfDeath = () => (
    <div
      style={{
        backgroundColor: "#0078d4",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Consolas, monospace",
        fontSize: "14px",
        lineHeight: "1.4",
        height: "100%",
        width: "100%",
        minHeight: "410px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 0,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ fontSize: "120px", marginBottom: "20px" }}>:(</div>
      <div style={{ fontSize: "24px", marginBottom: "20px" }}>
        Recruiter ran into a problem and needs to reboot.
      </div>
      <div style={{ marginBottom: "20px" }}>
        Please wait while the error is processed and you will return to the
        prior screen.
      </div>
      <div style={{ marginBottom: "30px" }}>0% complete</div>
      <div style={{ fontSize: "12px", opacity: 0.8 }}>
        Recruiter error code:
        <br />
        DEVELOPER_TOO_GOOD_TO_IGNORE
      </div>
    </div>
  );

  // Minimized state component
  const MinimizedWindow = () => (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        color: "#666",
        padding: "8px 16px",
        textAlign: "center",
        fontStyle: "italic",
        height: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        margin: "20px auto",
        width: "fit-content",
        minWidth: "200px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
    >
      📉 Small window, but a large UI/UX experience!
    </div>
  );

  return (
    <Box
      style={{
        ...containerStyle,
        backgroundColor: windowState === "closed" ? "#0078d4" : "#282c34",
        height: windowState === "minimized" ? "80px" : "450px",
        transition: "height 0.3s ease-in-out",
        marginBottom: windowState === "minimized" ? "30px" : "10px",
      }}
      sx={{
        maxWidth: {
          xs: "275px",
          sm: "500px",
          md: "650px",
          lg: "550px",
        },
        position: "relative",
      }}
    >
      <div style={headerStyle}>
        <span
          style={{ ...dotStyle("#ff5f56"), cursor: "pointer" }}
          onClick={() => handleDotClick("#ff5f56")}
        />
        <span
          style={{ ...dotStyle("#ffbd2e"), cursor: "pointer" }}
          onClick={() => handleDotClick("#ffbd2e")}
        />
        <span
          style={{ ...dotStyle("#27c93f"), cursor: "pointer" }}
          onClick={() => handleDotClick("#27c93f")}
        />
        <Stack sx={{ width: "100%", mr: "10%" }}>
          <Typography color="black">{title}</Typography>
        </Stack>
      </div>

      {/* Green dot easter egg message */}
      {showMessage && windowState === "normal" && (
        <Box
          sx={{
            position: "absolute",
            top: "45px",
            left: "12px",
            backgroundColor: "black",
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "500",
            zIndex: 10,
            animation: "fadeInOut 3s ease-in-out",
            boxShadow: "0 4px 12px rgba(137, 221, 168, 0.3)",
          }}
        >
          {randomMessage}
        </Box>
      )}

      <div
        style={{
          ...windowStyle,
          backgroundColor: windowState === "closed" ? "#0078d4" : "#282c34", // Blue background for BSOD

          borderRadius: windowState === "minimized" ? "7px" : "7px 7px 0 0",
        }}
      >
        {windowState === "closed" && (
          <Box
            sx={{
              width: {
                xs: "275px",
                sm: "500px",
                md: "650px",
                lg: "550px",
              },
            }}
          >
            <BlueScreenOfDeath />
          </Box>
        )}
        {windowState === "minimized" && (
          <Box
            sx={{
              width: {
                xs: "275px",
                sm: "500px",
                md: "650px",
                lg: "550px",
              },
            }}
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
          <pre style={preStyle}>
            <code>{highlightSyntax(code)}</code>
          </pre>
        )}
      </div>

      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
        `}
      </style>
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
});

const preStyle: React.CSSProperties = {
  margin: 0,
  padding: "10px 20px",
  overflowX: "auto",
  textAlign: "left",
};

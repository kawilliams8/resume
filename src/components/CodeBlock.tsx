import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { highlightSyntax } from "../utils/index";

interface CodeBlockProps {
  code: string;
  title: string;
  language?: string; // Optional language prop for future extensibility
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  const [easterEggActivated, setEasterEggActivated] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);

  const handleDotClick = (dotColor: string) => {
    if (dotColor === "#27c93f") {
      // Green dot
      setEasterEggActivated(true);
      setShowMessage(true);
      // Hide message after 3 seconds
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  const easterEggMessages = [
    "🕵️ Nice find! You're clearly detail-oriented. So am I!",
    "🎉 Easter egg activated! Hire this developer!",
    "🔍 Curiosity and fun are great traits in a developer, don't you think!?",
    "🚀 You found the secret! Katherine writes clean code AND makes development fun.",
    "💎 Hidden gem discovered! This developer thinks about great UX.",
    "🧩 Puzzle solver detected! Just like me in debugging sessions.",
  ];

  const randomMessage =
    easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];

  return (
    <Box
      style={{ ...containerStyle }}
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
          style={{
            ...dotStyle("#27c93f"),
            cursor: "pointer",
            transform: easterEggActivated ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.2s",
          }}
          onClick={() => handleDotClick("#27c93f")}
        />
        <Stack sx={{ width: "100%", mr: "10%" }}>
          <Typography color="black">{title}</Typography>
        </Stack>
      </div>

      {showMessage && (
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
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            textAlign: "left",
          }}
        >
          {randomMessage}
        </Box>
      )}

      <div style={{ ...windowStyle }}>
        <pre style={preStyle}>
          <code>{highlightSyntax(code)}</code>
        </pre>
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

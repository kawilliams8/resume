import { highlightSyntax } from "@/utils";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface CodeBlockProps {
  code: string;
  title: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  const highlightedCode = highlightSyntax(code);
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
      }}
    >
      <div style={headerStyle}>
        <span style={dotStyle("#ff5f56")} />
        <span style={dotStyle("#ffbd2e")} />
        <span style={dotStyle("#27c93f")} />
        <Stack sx={{ width: "100%", mr: "10%" }}>
          <Typography color="black">{title}</Typography>
        </Stack>
      </div>
      <div style={{ ...windowStyle }}>
        <pre style={preStyle}>
          <code>{highlightedCode}</code>
        </pre>
      </div>
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

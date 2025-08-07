import React, { CSSProperties } from "react";

type CodeBlockProps = {
  code: string;
  language?: string;
  style?: CSSProperties;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
  style,
}) => {
  return (
    <div style={{ ...containerStyle, ...style }}>
      <div style={headerStyle}>
        <span style={dotStyle("#ff5f56")} />
        <span style={dotStyle("#ffbd2e")} />
        <span style={dotStyle("#27c93f")} />
      </div>
      <pre style={preStyle}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  borderRadius: "8px",
  overflow: "hidden",
  border: "1px solid #ccc",
  fontSize: "14px",
  fontFamily: "monospace",
  backgroundColor: "#282c34",
  color: "#f8f8f2",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  maxWidth: "100%",
  margin: "5px auto",
};

const headerStyle: React.CSSProperties = {
  height: "32px",
  backgroundColor: "#e0e0e0",
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  gap: "8px",
};

const dotStyle = (color: string): React.CSSProperties => ({
  height: "12px",
  width: "12px",
  borderRadius: "50%",
  backgroundColor: color,
});

const preStyle: React.CSSProperties = {
  margin: 0,
  padding: "20px",
  overflowX: "auto",
  textAlign: "left",
};

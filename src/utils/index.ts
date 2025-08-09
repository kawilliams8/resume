import React from "react";

export const highlightSyntax = (code: string): React.ReactElement => {
  const keywords = ["const", "true", "false"];
  const typeKeywords = ["type", "interface"];
  const builtInTypes = ["string", "number", "boolean"];
  const customTypes = [
    "WorkEnvironment",
    "InterviewStatus",
    "Position",
    "Applicant",
  ];

  const tokens = code.split(
    /(\/\/.*$|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b\w+\b|\d+\.?\d*|[{}[\]();,:|]+|\s+|[^\w\s"'{}\[\]();,:]+)/gm
  );
  const elements: React.ReactElement[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!token) continue; // Skip empty tokens

    let color = "#abb2bf"; // Default color
    let fontStyle = "normal";

    // Check for comments first (highest priority)
    if (/^\/\/.*$/.test(token)) {
      color = "#5c6370"; // Gray for single-line comments
      fontStyle = "italic";
    } else if (/^\/\*[\s\S]*?\*\/$/.test(token)) {
      color = "#5c6370"; // Gray for multi-line comments
      fontStyle = "italic";
    } else if (keywords.includes(token)) {
      color = "#c678dd"; // Purple for keywords
    } else if (typeKeywords.includes(token)) {
      color = "#c678dd"; // Purple for TypeScript keywords
    } else if (builtInTypes.includes(token)) {
      color = "#e5c07b"; // Yellow for built-in types
    } else if (customTypes.includes(token)) {
      color = "#61afef"; // Blue for custom types
    } else if (/^".*"$|^'.*'$/.test(token)) {
      color = "#98c379"; // Green for strings
    } else if (/^\d+\.?\d*$/.test(token)) {
      color = "#d19a66"; // Orange for numbers
    } else if (token === "|") {
      color = "#56b6c2"; // Cyan for union operator
    }

    elements.push(
      React.createElement(
        "span",
        { key: i, style: { color, fontStyle } },
        token
      )
    );
  }

  return React.createElement(React.Fragment, {}, ...elements);
};

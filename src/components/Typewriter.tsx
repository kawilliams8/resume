import React from "react";

const text =
  "// She's ready to ship features on day one.\n // Excellent fit for the React/TypeScript team 👍🏻";

export const Typewriter = () => {
  const [line1Text, setLine1Text] = React.useState("");
  const [line2Text, setLine2Text] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(true);
  const [currentLine, setCurrentLine] = React.useState(1);
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    const lines = text.split("\n");
    const firstLine = lines[0] || "";
    const secondLine = lines[1] || "";

    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentLine === 1) {
        if (currentIndex < firstLine.length) {
          setLine1Text(firstLine.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setCurrentLine(2);
          currentIndex = 0;
        }
      } else if (currentLine === 2) {
        if (currentIndex < secondLine.length) {
          setLine2Text(secondLine.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(typeInterval);
        }
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [text, currentLine]);

  const fullText = text.replace("\n", " ");

  return (
    <>
      {/* Screen reader only */}
      <div className="sr-only" aria-live="polite" aria-label="Code snippet">
        {fullText}
      </div>

      <div
        style={{
          color: "#d4d4d4",
          marginTop: 10,
          marginLeft: "30px",
          textAlign: "left",
        }}
        aria-hidden="true"
        role="presentation"
      >
        <div>
          {line1Text}
          {currentLine === 1 && !isComplete && (
            <span
              style={{
                opacity: showCursor ? 1 : 0,
                marginLeft: "2px",
              }}
              aria-hidden="true"
            >
              |
            </span>
          )}
        </div>

        <div>
          {line2Text}
          {currentLine === 2 && !isComplete && (
            <span
              style={{
                opacity: showCursor ? 1 : 0,
                marginLeft: "2px",
              }}
              aria-hidden="true"
            >
              |
            </span>
          )}
        </div>
      </div>

      {/* Screen reader only CSS class */}
      <style>
        {`
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}
      </style>
    </>
  );
};

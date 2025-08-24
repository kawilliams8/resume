import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Stack,
  styled,
  alpha,
  Link,
} from "@mui/material";
import {
  KeyboardDoubleArrowRightTwoTone,
  OpenInNew,
} from "@mui/icons-material";
import { asciiArt, commands } from "./Bot";
import { BotInstructions } from "./BotInstructions";
import { BotTooltip } from "./BotTooltip";

export const BotExplainer = () => {
  const [lines, setLines] = useState<
    Array<{ id: string; content: React.ReactNode; type?: string }>
  >([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Set initial message
  useEffect(() => {
    const welcomeSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      setLines([
        {
          id: "0",
          content: <AsciiArt>{asciiArt}</AsciiArt>,
        },
        {
          id: "1",
          content: (
            <TerminalLine
              type="success"
              prefersReducedMotion={prefersReducedMotion}
            >
              Welcome to Colorado History Photos - Bluesky Bot Terminal v1.0.0
            </TerminalLine>
          ),
        },
        {
          id: "2",
          content: (
            <TerminalLine
              type="info"
              prefersReducedMotion={prefersReducedMotion}
            >
              Click a command button to explore how the Colorado History Photos
              bot works.
            </TerminalLine>
          ),
        },
        {
          id: "3",
          content: (
            <TerminalLine
              prefersReducedMotion={prefersReducedMotion}
            ></TerminalLine>
          ),
        },
      ]);
    };

    welcomeSequence();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = async (command: string) => {
    if (isProcessing) return;
    setIsProcessing(true);

    // Add the command to the terminal
    const commandLine = {
      id: `cmd-${Date.now()}`,
      content: (
        <TerminalLine type="input" prefersReducedMotion={prefersReducedMotion}>
          <Prompt>$</Prompt>
          <Command>{command}</Command>
        </TerminalLine>
      ),
    };
    setLines((prev) => [...prev, commandLine]);

    // Handle clear command
    if (command === "clear") {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setLines([
        {
          id: "0",
          content: (
            <TerminalLine
              type="info"
              prefersReducedMotion={prefersReducedMotion}
            >
              <Prompt>$</Prompt>
              Select a command.
            </TerminalLine>
          ),
        },
      ]);
      setIsProcessing(false);
      return;
    }

    // Display output with delays
    for (const output of commands[command].output) {
      await new Promise((resolve) => setTimeout(resolve, output.delay || 100));

      const outputLine = {
        id: `out-${Date.now()}-${Math.random()}`,
        content: (
          <TerminalLine
            type={output.type || "output"}
            prefersReducedMotion={prefersReducedMotion}
          >
            <span style={{ lineHeight: "30px" }}>&gt; {output.text}</span>
            {output.tech && (
              <Box sx={{ ml: 1 }}>
                {output.tech.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </Box>
            )}
          </TerminalLine>
        ),
      };
      setLines((prev) => [...prev, outputLine]);
    }

    // Add empty line after command output
    setLines((prev) => [
      ...prev,
      {
        id: `empty-${Date.now()}`,
        content: (
          <TerminalLine prefersReducedMotion={prefersReducedMotion}>
            <Prompt>$</Prompt>
          </TerminalLine>
        ),
      },
    ]);
    setIsProcessing(false);
  };

  const handleClear = () => {
    executeCommand("clear");
  };

  return (
    <Box
      sx={{
        p: 3,
        width: { xs: "300px", sm: "550px", md: "800px", lg: "1000px" },
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: { xs: 0, sm: 2 },
          background:
            "linear-gradient(#fdfdfd, #fdfdfd) padding-box, linear-gradient(110deg, rgba(6, 182, 212, 0.5) 0%, rgba(139, 92, 246, 0.9) 50%) border-box",
          border: "2px solid transparent",
          borderRadius: 2,
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              color: "#282c34",
              pt: { xs: 2, sm: 0 },
            }}
          >
            Colorado History Photos: A Social Media Bot for Bluesky 🤖
          </Typography>
          <Paper>
            <Stack mb={2}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"JetBrains Mono", "Courier New", monospace',
                  fontSize: "1.25rem",
                  color: "#282c34",
                  my: 2,
                }}
              >
                Select a terminal command:
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                useFlexGap
                justifyContent="center"
              >
                <CommandButton
                  onClick={() => executeCommand("bot status")}
                  disabled={isProcessing}
                  sx={{ minWidth: { lg: 110 } }}
                  tabIndex={0}
                  role="button"
                  aria-label="Check bot status"
                >
                  <KeyboardDoubleArrowRightTwoTone
                    sx={{ mr: 0.5, color: "#3b82f6" }}
                  />
                  fetch bot status
                </CommandButton>
                <CommandButton
                  onClick={() => executeCommand("bot run")}
                  disabled={isProcessing}
                  sx={{ minWidth: { lg: 110 } }}
                  tabIndex={0}
                  role="button"
                  aria-label="Run post sequence"
                >
                  <KeyboardDoubleArrowRightTwoTone
                    sx={{ mr: 0.5, color: "#3b82f6" }}
                  />
                  run POST SEQUENCE
                </CommandButton>
                <CommandButton
                  onClick={() => executeCommand("bot tech")}
                  disabled={isProcessing}
                  sx={{ minWidth: { lg: 110 } }}
                  tabIndex={0}
                  role="button"
                  aria-label="Print tech stack"
                >
                  <KeyboardDoubleArrowRightTwoTone
                    sx={{ mr: 0.5, color: "#3b82f6" }}
                  />
                  print tech stack
                </CommandButton>
                <CommandButton
                  onClick={() => executeCommand("clear")}
                  disabled={isProcessing}
                  sx={{ minWidth: { lg: 110 } }}
                  tabIndex={0}
                  role="button"
                  aria-label="Clear terminal"
                >
                  <KeyboardDoubleArrowRightTwoTone
                    sx={{ mr: 0.5, color: "#3b82f6" }}
                  />
                  clear terminal
                </CommandButton>
              </Stack>
              <TerminalWindow
                role="region"
                aria-label="Bluesky Bot Demonstration"
                aria-live="polite"
                elevation={4}
                sx={{ mt: 2, mx: 2 }}
              >
                <TerminalHeader>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={1}
                    sx={{ boxSizing: "border-box", width: 20 }}
                  >
                    <TerminalButton
                      bg="#ef4444"
                      onClick={handleClear}
                      sx={{ cursor: "pointer" }}
                      disabled={isProcessing}
                      tabIndex={0}
                      role="button"
                      aria-label="Clear terminal"
                    />
                    <TerminalButton bg="#fbbf24" disabled={true} />
                    <TerminalButton bg="#10b981" disabled={true} />
                  </Stack>
                  <Typography
                    sx={{
                      flex: 1,
                      textAlign: "center",
                      fontSize: "13px",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      maxWidth: "80%",
                    }}
                  >
                    colorado-history-photos@bluesky-bot ~ terminal
                  </Typography>
                  <BotTooltip />
                </TerminalHeader>

                <TerminalBody ref={terminalBodyRef}>
                  {lines.map((line) => (
                    <Box key={line.id}>{line.content}</Box>
                  ))}
                </TerminalBody>
              </TerminalWindow>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              useFlexGap
              justifyContent="center"
              mb={2}
            >
              <Link
                href={"https://github.com/kawilliams8/coloradophotosbot"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CommandButton
                  sx={{ minWidth: { lg: 110 } }}
                  tabIndex={0}
                  role="button"
                  aria-label="Open Repository"
                >
                  <OpenInNew sx={{ mr: 0.5, color: "#3b82f6" }} />
                  open repository
                </CommandButton>
              </Link>

              <Link
                href={"https://bsky.app/profile/coloradophotos.bsky.social"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <CommandButton
                  sx={{ minWidth: { lg: 110 } }}
                  tabIndex={0}
                  role="button"
                  aria-label="View live output"
                >
                  <OpenInNew sx={{ mr: 0.5, color: "#3b82f6" }} />
                  view live output
                </CommandButton>
              </Link>
            </Stack>
          </Paper>
        </Stack>
        <BotInstructions />
      </Paper>
    </Box>
  );
};

const TerminalWindow = styled(Paper)(({}) => ({
  background: "#0a0e27",
  borderRadius: "8px",
  overflow: "hidden",
  fontFamily: '"JetBrains Mono", "Courier New", monospace',
  position: "relative",
}));

const TerminalHeader = styled(Box)({
  background: "linear-gradient(90deg, #1e293b 0%,rgb(13, 18, 1) 100%)",
  padding: "12px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
});

const TerminalButton = styled(Button)<{ bg: string }>(({ bg }) => ({
  width: "12px",
  height: "14px",
  borderRadius: "50%",
  background: bg,
  cursor: "not-allowed",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  minWidth: "1px",
}));

const TerminalBody = styled(Box)({
  padding: "20px",
  minHeight: "450px",
  maxHeight: "450px",
  overflowY: "auto",
  fontSize: "14px",
  lineHeight: "1.6",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "rgba(59, 130, 246, 0.1)",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(59, 130, 246, 0.3)",
    borderRadius: "4px",
  },
});

const TerminalLine = styled(Box)<{
  type?: "input" | "output" | "error" | "success" | "info";
  prefersReducedMotion: boolean;
}>(({ type = "output", prefersReducedMotion }) => ({
  animation: prefersReducedMotion ? "none" : "fadeIn 0.3s ease-in",
  lineHeight: "28px",
  marginBottom: "0px",
  color:
    type === "input"
      ? "#06b6d4" // teal
      : type === "error"
        ? "#ef4444" // red
        : type === "success"
          ? "#10b981" // green
          : type === "info"
            ? "#8b5cf6"
            : "#94a3b8",
  display: "flex",
  alignItems: "flex-start",
  fontFamily: "inherit",
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(5px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const Prompt = styled("span")({
  color: "#10b981",
  marginRight: "8px",
  userSelect: "none",
});

const Command = styled("span")({
  color: "#06b6d4",
});

const CommandButton = styled(Button)(({}) => ({
  background: alpha("#0a0e27", 0.8),
  color: alpha("#fff", 0.9),
  fontFamily: '"Courier New", monospace',
  fontSize: "12px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  minWidth: "200px",
  "&:hover": {
    background: alpha("#0a0e27", 0.6),
    borderColor: "#3b82f6",
    color: "black",
  },
  "&:disabled": {
    borderColor: "white",
    color: alpha("#fff", 0.6),
    cursor: "not-allowed",
    pointerEvents: "auto",
  },
}));

const TechBadge = styled(Box)({
  display: "inline-block",
  padding: "2px 8px",
  background: alpha("#8b5cf6", 0.2),
  border: "1px solid",
  borderColor: alpha("#8b5cf6", 0.5),
  borderRadius: "4px",
  color: "#8b5cf6",
  fontSize: "11px",
  marginRight: "8px",
  marginTop: "4px",
  marginBottom: "14px",
  lineHeight: "1rem",
});

const AsciiArt = styled(Box)({
  ariaHidden: "true",
  color: "#3b82f6",
  fontSize: "14px",
  lineHeight: "1.2",
  marginBottom: "16px",
  fontFamily: '"JetBrains Mono", "Courier New", monospace',
  whiteSpace: "pre",
});

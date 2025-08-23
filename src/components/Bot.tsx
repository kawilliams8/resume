import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  Stack,
  styled,
  alpha,
  IconButton,
  Tooltip,
} from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { TerminalSharp } from "@mui/icons-material";

const TerminalWindow = styled(Paper)(({}) => ({
  background: "#0a0e27",
  borderRadius: "8px",
  overflow: "hidden",
  fontFamily: '"JetBrains Mono", "Courier New", monospace',
  position: "relative",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
  border: "1px solid rgba(59, 130, 246, 0.2)",
}));

const TerminalHeader = styled(Box)({
  background: "linear-gradient(90deg, #1e293b 0%, #334155 100%)",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
});

const TerminalButton = styled(Box)<{ color: string }>(({ color }) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  background: color,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
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
}>(({ type = "output" }) => ({
  marginBottom: "8px",
  color:
    type === "input"
      ? "#06b6d4"
      : type === "error"
        ? "#ef4444"
        : type === "success"
          ? "#10b981"
          : type === "info"
            ? "#8b5cf6"
            : "#94a3b8",
  display: "flex",
  alignItems: "flex-start",
  fontFamily: "inherit",
  animation: "fadeIn 0.3s ease-in",
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

const SuggestionChip = styled(Button)(({}) => ({
  background: alpha("#0a0e27", 0.8),
  color: "white",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "12px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    background: alpha("#0a0e27", 0.6),
    borderColor: "#3b82f6",
    color: "black",
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
  marginBottom: "4px",
});

const AsciiArt = styled(Box)({
  color: "#3b82f6",
  fontSize: "12px",
  lineHeight: "1.2",
  marginBottom: "16px",
  fontFamily: "monospace",
  whiteSpace: "pre",
});

// Terminal command data
interface TerminalCommand {
  command: string;
  output: Array<{
    text: string;
    type?: "output" | "error" | "success" | "info";
    delay?: number;
    tech?: string[];
  }>;
}

const commands: Record<string, TerminalCommand> = {
  "bot status": {
    command: "bot status",
    output: [
      { text: "Fetching bot status...", type: "info", delay: 300 },
      { text: "✓ Bot is ONLINE", type: "success", delay: 500 },
      { text: "├─ Uptime: 47 days, 3 hours", delay: 100 },
      { text: "├─ Posts today: 8 / 12", delay: 100 },
      { text: "├─ Last post: 23 minutes ago", delay: 100 },
      { text: "├─ Queue: 3 posts scheduled", delay: 100 },
      {
        text: "└─ Health: All systems operational",
        type: "success",
        delay: 100,
      },
    ],
  },
  "bot run": {
    command: "bot run",
    output: [
      { text: "Starting scheduled post sequence...", type: "info", delay: 500 },
      { text: "", delay: 200 },
      { text: "[1/6] 🕐 Checking schedule...", delay: 800 },
      {
        text: "└─ Next post scheduled for: NOW",
        type: "success",
        delay: 400,
        tech: ["Cron", "Node.js"],
      },
      { text: "", delay: 200 },
      { text: "[2/6] 📊 Analyzing trends & topics...", delay: 1000 },
      { text: "├─ Scanning recent posts for context", delay: 400 },
      {
        text: "└─ Topics identified: React, TypeScript, Web3",
        type: "info",
        delay: 400,
        tech: ["PostgreSQL"],
      },
      { text: "", delay: 200 },
      { text: "[3/6] ✨ Generating content...", delay: 1200 },
      { text: "├─ Using template: tech_insight", delay: 400 },
      {
        text: "├─ Enhancing with AI...",
        delay: 800,
        tech: ["OpenAI", "TypeScript"],
      },
      { text: "└─ Content generated (247 chars)", type: "success", delay: 400 },
      { text: "", delay: 200 },
      { text: "[4/6] 🔍 Validating content...", delay: 800 },
      { text: "├─ ✓ Length check: PASS", type: "success", delay: 200 },
      { text: "├─ ✓ Duplicate check: PASS", type: "success", delay: 200 },
      {
        text: "├─ ✓ Rate limit check: PASS",
        type: "success",
        delay: 200,
        tech: ["PostgreSQL"],
      },
      { text: "└─ ✓ Content guidelines: PASS", type: "success", delay: 200 },
      { text: "", delay: 200 },
      { text: "[5/6] 🎨 Formatting for Bluesky...", delay: 600 },
      { text: "├─ Adding rich text formatting", delay: 300 },
      { text: "└─ Preparing API payload", delay: 300, tech: ["TypeScript"] },
      { text: "", delay: 200 },
      {
        text: "[6/6] 🚀 Publishing to Bluesky...",
        delay: 800,
        tech: ["Bluesky API", "AWS"],
      },
      { text: "└─ Post published successfully!", type: "success", delay: 600 },
      { text: "", delay: 300 },
    ],
  },
  "bot tech": {
    command: "bot tech",
    output: [
      { text: "Loading tech stack...", type: "info", delay: 300 },
      { text: "", delay: 100 },
      { text: "🛠️  Core Technologies:", type: "info", delay: 200 },
      {
        text: "├─ Runtime: Node.js v20 (AWS Lambda)",
        delay: 100,
        tech: ["Node.js", "AWS"],
      },
      { text: "├─ Language: TypeScript 5.3", delay: 100, tech: ["TypeScript"] },
      { text: "├─ Database: PostgreSQL 15", delay: 100, tech: ["PostgreSQL"] },
      {
        text: "├─ Scheduler: Cron (every 2 hours)",
        delay: 100,
        tech: ["Cron"],
      },
      { text: "├─ AI: OpenAI GPT-4", delay: 100, tech: ["OpenAI"] },
      {
        text: "├─ API: Bluesky AT Protocol",
        delay: 100,
        tech: ["Bluesky API"],
      },
      { text: "└─ Monitoring: CloudWatch", delay: 100, tech: ["AWS"] },
      { text: "", delay: 100 },
      { text: "📦 Key Dependencies:", delay: 200 },
      { text: "├─ @atproto/api: ^0.7.0", delay: 100 },
      { text: "├─ openai: ^4.20.0", delay: 100 },
      { text: "├─ node-cron: ^3.0.3", delay: 100 },
      { text: "└─ pg: ^8.11.3", delay: 100 },
    ],
  },
  "bot logs": {
    command: "bot logs --recent",
    output: [
      { text: "Streaming recent logs...", type: "info", delay: 300 },
      { text: "[2024-03-15 09:23:01] Schedule trigger activated", delay: 200 },
      { text: "[2024-03-15 09:23:02] Generating post...", delay: 150 },
      {
        text: "[2024-03-15 09:23:04] Post published: ID #8423",
        type: "success",
        delay: 150,
      },
      { text: "[2024-03-15 11:23:01] Schedule trigger activated", delay: 150 },
      { text: "[2024-03-15 11:23:02] Generating post...", delay: 150 },
      {
        text: "[2024-03-15 11:23:05] Post published: ID #8424",
        type: "success",
        delay: 150,
      },
      { text: "[2024-03-15 13:23:01] Schedule trigger activated", delay: 150 },
      { text: "[2024-03-15 13:23:02] Rate limit check...", delay: 150 },
      {
        text: "[2024-03-15 13:23:02] Skipping: Daily limit reached",
        type: "info",
        delay: 150,
      },
    ],
  },
};

export const Bot = () => {
  const [lines, setLines] = useState<
    Array<{ id: string; content: React.ReactNode; type?: string }>
  >([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    const welcomeSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const asciiArt = `    ____  __           __          ____        __ 
   / __ )/ /_  _____  / /______  __/ __ )____  / /_
  / __  / / / / / _ \\/ / / / __ \\/ / __  / __ \\/ __/
 / /_/ / / /_/ /  __/ /_/ / / / / / /_/ / /_/ / /_  
/_____/_/\\__,_/\\___/\\__,_/_/ /_/_/_____/\\____/\\__/  `;

      setLines([
        {
          id: "0",
          content: <AsciiArt>{asciiArt}</AsciiArt>,
        },
        {
          id: "1",
          content: (
            <TerminalLine type="success">
              Welcome to Bluesky Bot Terminal v2.0.3
            </TerminalLine>
          ),
        },
        {
          id: "2",
          content: (
            <TerminalLine type="info">
              Click any command above to explore how the Colorado History Photos
              bot works
            </TerminalLine>
          ),
        },
        {
          id: "3",
          content: <TerminalLine></TerminalLine>,
        },
      ]);
    };

    welcomeSequence();
  }, []);

  // Auto-scroll to bottom when new lines are added
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
        <TerminalLine type="input">
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
            <TerminalLine type="info">
              Terminal cleared. Click any command above to continue.
            </TerminalLine>
          ),
        },
      ]);
      setIsProcessing(false);
      return;
    }

    // Get command output
    const cmd = commands[command] || {
      command: command,
      output: [
        {
          text: `Command not found: ${command}`,
          type: "error" as const,
          delay: 100,
        },
        {
          text: `Available commands: bot status, bot run, bot tech, bot logs`,
          type: "info" as const,
          delay: 100,
        },
      ],
    };

    // Display output with delays
    for (const output of cmd.output) {
      await new Promise((resolve) => setTimeout(resolve, output.delay || 100));

      const outputLine = {
        id: `out-${Date.now()}-${Math.random()}`,
        content: (
          <TerminalLine type={output.type || "output"}>
            {output.text}
            {output.tech && (
              <Box sx={{ mt: 0.5 }}>
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
        content: <TerminalLine></TerminalLine>,
      },
    ]);

    setIsProcessing(false);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <Box sx={{ p: 3, maxWidth: "1000px", margin: "0 auto" }}>
      <Stack spacing={3}>
        <Box>
          <Paper
            sx={{
              p: 2,
              background:
                "linear-gradient(#fdfdfd, #fdfdfd) padding-box, linear-gradient(135deg, rgba(6, 182, 212, 0.5) 0%, rgba(139, 92, 246, 0.9) 50%) border-box",
              border: "2px solid transparent",
              borderRadius: 2,
            }}
          >
            <Stack spacing={1}>
              <Paper sx={{ background: alpha("#000", 0.02), p: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ mb: 1, fontSize: "1.5rem", color: "#282c34" }}
                >
                  Colorado History Photos
                </Typography>
                <Typography
                  mt="2"
                  variant="h5"
                  sx={{
                    fontSize: "1.25rem",
                    color: "#282c34",
                  }}
                >
                  💡 What is it?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textAlign: "left" }}
                >
                  Colorado History Photos is a bot created to automatically post
                  images from the Denver Public Library Digital Archive to
                  Bluesky.
                </Typography>
                <Typography
                  mt="2"
                  variant="h5"
                  sx={{
                    fontSize: "1.25rem",
                    color: "#282c34",
                  }}
                >
                  💡 How it works:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textAlign: "left" }}
                >
                  The Colorado History Photos bot runs on GitHub Actions,
                  triggered twice daily via cron jobs. The bot retrieves a
                  curated post_id from a SQLite database, downloads the
                  associated photograph from the Library's Digital Archive,
                  resizes the photo as necessary, then scrapes the description
                  text from the Archive page. The description text is passed to
                  the Claude API, where it is structured and formatted for
                  clarity and character count, and two social media-friendly
                  hash tags are created.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", textAlign: "left", mt: 2 }}
                >
                  The photo is then posted to Bluesky via the AT Protocol. If
                  the image post is successful, a text post is linked and
                  created. Finally, the bot posts a threaded reply that contains
                  a Rich Text link to the original photograph with searchable
                  Rich Text hash tags. The post_id is moved from the scheduled
                  table to the posted table and the changes are committed to the
                  repository. The entire pipeline completes in under ~5 seconds.
                </Typography>
                {/* Command buttons */}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.25rem",
                    color: "#282c34",
                    my: 2,
                  }}
                >
                  Click to execute a terminal command:
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  flexWrap="wrap"
                  useFlexGap
                  justifyContent="center "
                >
                  <SuggestionChip
                    onClick={() => executeCommand("bot status")}
                    disabled={isProcessing}
                    sx={{ fontWeight: "bold" }}
                  >
                    <TerminalSharp sx={{ mr: 1, color: "limegreen" }} />
                    DISPLAY BOT STATUS
                  </SuggestionChip>
                  <SuggestionChip
                    onClick={() => executeCommand("bot run")}
                    disabled={isProcessing}
                    sx={{ fontWeight: "bold" }}
                  >
                    <TerminalSharp sx={{ mr: 1, color: "limegreen" }} />
                    WATCH POST SEQUENCE
                  </SuggestionChip>
                  <SuggestionChip
                    onClick={() => executeCommand("bot tech")}
                    disabled={isProcessing}
                    sx={{ fontWeight: "bold" }}
                  >
                    <TerminalSharp sx={{ mr: 1, color: "limegreen" }} />
                    DISPLAY TECH STACK
                  </SuggestionChip>
                  <SuggestionChip
                    onClick={() => executeCommand("clear")}
                    disabled={isProcessing}
                    sx={{ fontWeight: "bold" }}
                  >
                    <TerminalSharp sx={{ mr: 1, color: "limegreen" }} />
                    CLEAR TERMINAL
                  </SuggestionChip>
                </Stack>
              </Paper>
            </Stack>
            <TerminalWindow elevation={8} sx={{ mt: 2 }}>
              <TerminalHeader>
                <TerminalButton color="#ef4444" onClick={handleReset} />
                <TerminalButton color="#fbbf24" />
                <TerminalButton color="#10b981" />
                <Typography
                  sx={{
                    flex: 1,
                    textAlign: "center",
                    fontSize: "13px",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  bot@bluesky ~ terminal
                </Typography>
                <Tooltip title="About this terminal">
                  <IconButton size="small" sx={{ color: "#94a3b8" }}>
                    <HelpOutline fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TerminalHeader>

              <TerminalBody ref={terminalBodyRef}>
                {lines.map((line) => (
                  <Box key={line.id}>{line.content}</Box>
                ))}
              </TerminalBody>
            </TerminalWindow>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};

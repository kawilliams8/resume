import { Box } from "@mui/material";

export const EasterEggMessages = () => {
  return (
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

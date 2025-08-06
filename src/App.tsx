import { Box, Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background: `linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        px: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 600, mb: 1 }}>
        Katherine Williams
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 300, opacity: 0.85, mb: 2 }}>
        Senior Frontend / Fullstack Software Engineer
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          href="https://github.com/kawilliams8"
          target="_blank"
          rel="noopener"
          variant="contained"
          startIcon={<GitHubIcon />}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            fontWeight: 500,
            backdropFilter: "blur(4px)",
            borderRadius: "4px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          GitHub
        </Button>

        <Button
          href="https://www.linkedin.com/in/kawilliamsco/"
          target="_blank"
          rel="noopener"
          variant="contained"
          startIcon={<LinkedInIcon />}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            fontWeight: 500,
            backdropFilter: "blur(4px)",
            borderRadius: "4px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          LinkedIn
        </Button>
      </Stack>
      <Stack direction="column" sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 100, opacity: 0.85, mb: 2 }}>
          React | Vue | TypeScript | Redux | Design Systems | E2E Testing
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 100, opacity: 0.85, mb: 2 }}>
          RESTful APIs | Cursor AI | Claude | Web Sockets | Laravel | Node |
          Docker | AWS
        </Typography>
      </Stack>
    </Box>
  );
}

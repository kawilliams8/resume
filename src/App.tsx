import { Box, Typography, Button, Stack } from "@mui/material";

export default function HomePage() {
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
      <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
        Katherine Williams
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 300, opacity: 0.85, mb: 4 }}>
        Senior Frontend / Fullstack Software Engineer
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          href="https://github.com/kawilliams8"
          target="_blank"
          rel="noopener"
          variant="contained"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
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
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
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
    </Box>
  );
}

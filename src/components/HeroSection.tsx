import { Typography, Stack } from "@mui/material";
import { ButtonLinks } from "./ButtonLinks";

export const HeroSection = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 800,
          mt: 1,
          maxWidth: "80%",
          wordBreak: "break-word",
          whiteSpace: "normal",
          fontSize: { xs: "2.25rem", sm: "2.5rem", md: "3.5rem" },
          letterSpacing: 2,
        }}
      >
        Katherine Williams
      </Typography>
      <Typography
        variant="h2"
        sx={{
          mb: 1,
          mx: 3,
          fontWeight: 100,
          fontSize: { xs: "1.1rem", sm: "1.5rem" },
          letterSpacing: 3,
          opacity: 0.7,
        }}
      >
        Senior Frontend / Fullstack Software Engineer
      </Typography>
      <ButtonLinks />
      <Stack direction="column" sx={{ mt: 2, maxWidth: "90%" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 100,
            opacity: 0.85,
            mb: 1,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          React | Vue | TypeScript | Redux | UI Libraries | Playwright
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 100,
            opacity: 0.85,
            mb: 1,
            fontSize: { xs: ".9rem", sm: "1rem" },
          }}
        >
          RESTful APIs | Laravel | Node | AWS | Docker | Cursor AI
        </Typography>
      </Stack>
    </>
  );
};
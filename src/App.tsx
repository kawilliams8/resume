import { Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ShootingStars } from "./components/ShootingStars";
import styled from "@emotion/styled";
import { CodeBlock } from "./components/CodeBlock";

export default function App() {
  return (
    <>
      <BackgroundLayer>
        <Stack
          className="floatAnimation"
          sx={{
            height: "100vh",
            width: "100%",
            background: `linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)`,
          }}
        >
          <ShootingStars />
        </Stack>
      </BackgroundLayer>
      <ForegroundLayer>
        <Stack
          sx={{
            width: "100%",
            maxWidth: "900px",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              mt: 1,
              maxWidth: "100%",
              wordBreak: "break-word",
              whiteSpace: "normal",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            Katherine Williams
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              mb: 1,
              fontSize: { xs: "1.25rem", sm: "1.75rem" },
            }}
          >
            Senior Frontend / Fullstack Software Engineer
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              mb: 1,
            }}
          >
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
          <Stack direction="column" sx={{ mt: 1, maxWidth: "80%" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 100,
                opacity: 0.85,
                mb: 2,
                fontSize: { xs: "1.25rem" },
              }}
            >
              React | Vue | TypeScript | Redux | Design Systems | E2E Testing
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 100,
                opacity: 0.85,
                mb: 2,
                fontSize: { xs: "1.25rem" },
              }}
            >
              RESTful APIs | Cursor AI | Claude | Web Sockets | Laravel | Node |
              Docker | AWS
            </Typography>
            <CodeBlock code={code} language="javascript" />
          </Stack>
        </Stack>
      </ForegroundLayer>
    </>
  );
}

const code = `{
  "candidate": "Katherine Williams",
  "years_of_experience": 7,
  "education": "Turing School of Software and Design",
  "interview": {
    "technical": "passed ✅",
    "behavioral": "nailed it 💬",
    "team_fit": "excellent 🤝"
  },
  "offer": {
    "position": "Senior Frontend Engineer",
    "stack": ["React", "TypeScript", "Material UI", "Playwright", "Storybook"],
    "salary": "💰 competitive",
    "start_date": "ASAP 🚀"
  },
  "next_steps": [
    "Sign offer letter ✍️",
    "Celebrate 🎉",
    "Clone the repo 🧑‍💻",
    "Push great code 🔥"
  ]
}`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
  pointer-events: none;
`;

const ForegroundLayer = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  overflow-wrap: break-word;
`;

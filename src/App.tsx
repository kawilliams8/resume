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
            my: 2,
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
              fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
            }}
          >
            Katherine Williams
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              mb: 1,
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
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
            <StyledButton
              href="https://github.com/kawilliams8"
              variant="contained"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </StyledButton>
            <StyledButton
              href="https://www.linkedin.com/in/kawilliamsco/"
              variant="contained"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </StyledButton>
          </Stack>
          <Stack direction="column" sx={{ mt: 1, maxWidth: "90%" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 100,
                opacity: 0.85,
                mb: 2,
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
                mb: 2,
                fontSize: { xs: ".9rem", sm: "1rem" },
              }}
            >
              RESTful APIs | Laravel | Node | AWS | Docker | Cursor AI
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
  "work_environment" : "remote",
  "interview": {
    "technical": "passed ✅",
    "behavioral": "nailed it 💬",
    "team_fit": "excellent 🤝"
  },
  "offer": {
    "position": "Senior Frontend Engineer",
    "responsibilities": ["UI Development", "End-to-End Testing", "Mentorship", "Collaboration" ],
    "salary": "competitive 💰",
    "start_date": "ASAP 🚀"
  },
  "next_steps": [
    "Sign offer letter ✍️",
    "Celebrate 🎉",
    "Clone the repo 🧑‍💻",
    "Hit the ground running 🔥"
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

const StyledButton = styled(Button)(({}) => ({
  target: "_blank",
  rel: "noopener",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "white",
  fontWeight: 500,
  backdropFilter: "blur(4px)",
  borderRadius: "4px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  width: "110px",
}));

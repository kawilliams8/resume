import { Typography, Stack, ThemeProvider, Box } from "@mui/material";
import { ShootingStars } from "./components/ShootingStars";
import styled from "@emotion/styled";
import { CodeBlock } from "./components/CodeBlock";
import CssBaseline from "@mui/material/CssBaseline";
import { ButtonLinks } from "./components/ButtonLinks";
import { ResumeCards } from "./components/ResumeCards";
import { BotExplainer } from "./components/BotExplainer";
import { ThemeToggle } from "./theme/ThemeToggle";
import { createDarkTheme, createLightTheme } from "../src/theme/theme";
import { useMemo } from "react";
import { useThemeMode } from "../src/theme/useThemeMode";

export default function App() {
  console.log(
    "⚡️ Thanks for checking under the hood! Let's build something amazing together. ⚡️"
  );
  const { toggleMode, isDark } = useThemeMode();

  const theme = useMemo(
    () => (isDark ? createDarkTheme : createLightTheme),
    [isDark]
  );

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ThemeToggle onToggle={toggleMode} />
        <BackgroundLayer>
          <Stack
            className="floatAnimation"
            sx={{
              height: "100vh",
              width: "100%",
              background: theme.palette.background.default,
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
              mt: 2,
            }}
          >
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

            <Stack direction={{ xs: "column", lg: "row" }} mt={2}>
              <CodeBlock code={code1} title="top_applicant.ts" withTypewriter />
              <CodeBlock code={code2} title="types/index.ts" />
            </Stack>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 100,
                mt: 4,
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
                letterSpacing: 6,
                opacity: 0.7,
                maxWidth: "90%",
                wordBreak: "break-word",
                whiteSpace: "normal",
              }}
            >
              PROFESSIONAL EXPERIENCE:
            </Typography>
            <ResumeCards />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 100,
                mt: 4,
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
                letterSpacing: 6,
                opacity: 0.7,
                maxWidth: "90%",
                wordBreak: "break-word",
                whiteSpace: "normal",
              }}
            >
              PERSONAL PROJECT:
            </Typography>
            <BotExplainer />
          </Stack>
        </ForegroundLayer>
      </ThemeProvider>
    </>
  );
}

const BackgroundLayer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  zIndex: 0,
  pointerEvents: "none",
});

const ForegroundLayer = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  overflow-wrap: break-word;
  min-height: 100vh;
`;

const code1 = `
  const top_applicant: Applicant = {
  "candidate": "Katherine Williams",
  "years_of_experience": 7,
  "education": "Turing School of Software and Design - Frontend Engineering",
  "work_environment" : "remote",
  "interview": {
    "technical": "passed",
    "behavioral": "nailed it",
    "team_fit": "excellent"
  },
  "offer": {
    "position": "Senior Frontend Engineer",
    "responsibilities": ["UI Development", "End-to-End Testing", "Mentorship" ],
    "salary": "competitive",
    "start_date": "ASAP"
  },
  "next_steps": [
    "Sign offer letter ✍️",
    "Celebrate 🎉",
    "Clone the repo 🧑‍💻",
    "Hit the ground running 🔥"
  ]
}`;

const code2 = `
type Position = 'Senior Frontend Engineer' | 'Frontend Engineer' | 'Junior Frontend Engineer';
type WorkEnvironment = 'remote' | 'hybrid' | 'onsite';
type InterviewStatus = 'passed' | 'failed' | 'pending';

interface Applicant {
  candidate: string;
  years_of_experience: number;
  education: string;
  work_environment: WorkEnvironment;
  interview: {
    technical: InterviewStatus;
    behavioral: string;
    team_fit: 'excellent' | 'good' | 'fair' | 'poor';
  };
  offer: {
    position: Position;
    responsibilities: string[];
    salary: string;
    start_date: string;
  };
  next_steps: string[];
}`;

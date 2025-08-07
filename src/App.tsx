import { Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlineIcon from "@mui/icons-material/EmailOutlined";
import { ShootingStars } from "./components/ShootingStars";
import styled from "@emotion/styled";
import { CodeBlock } from "./components/CodeBlock";
import "./fonts.css";

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
            mt: 2,
            fontFamily: "SF Pro Display",
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
              fontFamily: "SF Pro Display",
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
              fontFamily: "SF Pro Display",
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
              my: 1,
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
            <StyledButton
              href="mailto:kawilliams8@gmail.com?subject=Hey,%20Katie!"
              variant="contained"
              startIcon={<EmailOutlineIcon />}
            >
              Email Me
            </StyledButton>
          </Stack>
          <Stack direction="column" sx={{ mt: 1, maxWidth: "90%" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 100,
                opacity: 0.85,
                mb: 1,
                fontSize: { xs: "1rem", sm: "1.25rem" },
                fontFamily: "SF Pro Display",
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
                fontFamily: "SF Pro Display",
              }}
            >
              RESTful APIs | Laravel | Node | AWS | Docker | Cursor AI
            </Typography>
          </Stack>
          <Stack direction={{ xs: "column", lg: "row" }}>
            <CodeBlock code={code1} title="top_applicant.ts" />
            <CodeBlock code={code2} title="types/index.ts" />
          </Stack>
        </Stack>
      </ForegroundLayer>
    </>
  );
}

const BackgroundLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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
  min-height: 100vh;
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
  width: "120px",
}));

const code1 = `const top_applicant: Applicant = {
  "candidate": "Katherine Williams",
  "years_of_experience": 7,
  "education": "Turing School of Software and Design - Frontend Engineering",
  "work_environment" : "remote",
  "interview": {
    "technical": "passed ✅",
    "behavioral": "nailed it 💬",
    "team_fit": "excellent 🤝"
  },
  "offer": {
    "position": "Senior Frontend Engineer",
    "responsibilities": ["UI Development", "End-to-End Testing", "Mentorship" ],
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

const code2 = `type WorkEnvironment = 'remote' | 'hybrid' | 'onsite';
type InterviewStatus = 'passed' | 'failed' | 'pending';
type Position = 'Senior Frontend Engineer' | 'Frontend Engineer' | 'Junior Frontend Engineer';

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

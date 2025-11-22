import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  styled,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";
import { FireworkStars } from "./FireworkStars";

interface FlipCardItemProps {
  data: ResumeCardData;
  isFlipped: boolean;
  onFlip: () => void;
}

const FlipCardItem = ({ data, isFlipped, onFlip }: FlipCardItemProps) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const theme = useTheme();

  const handleFlip = () => {
    if (!isFlipped) {
      setShowFireworks(true);
      // Hide after animation completes
      setTimeout(() => setShowFireworks(false), 5000);
    }
    onFlip();
  };

  return (
    <FlipCard onClick={handleFlip}>
      <FireworkStars show={showFireworks} />
      <CardContent sx={{ position: "relative", height: "100%" }}>
        {!isFlipped ? (
          <>
            <Typography
              mt="2"
              variant="h4"
              sx={{
                fontSize: "1.5rem",
                color: theme.palette.primary.dark,
              }}
            >
              {data.title}
            </Typography>
            <Divider
              sx={{ mb: 1, mx: 2, background: "rgba(6, 182, 212, 0.1)" }}
            />
            <Typography mt="2" color="rgba(139, 92, 246, 1)">
              {data.company}
            </Typography>
            <Typography color="rgba(139, 92, 246, 1)">
              {data.duration}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, mb: 1 }}
              color="text.secondary"
            >
              <DoubleArrowIcon
                sx={{
                  color: "#8b5cf6",
                  opacity: 0.05,
                  fontSize: "5rem",
                  position: "absolute",
                  bottom: 80,
                  left: 0,
                }}
              />
              {data.story}
            </Typography>
            <Star
              className="star-icon"
              sx={{
                position: "absolute",
                bottom: 16,
                right: 8,
                color: "#e5c07b",
                fontSize: "1.5rem",
                transition: "transform 0.3s ease, color 0.3s ease",
              }}
            />
          </>
        ) : (
          <Box
            sx={{
              border: ".5px solid rgba(139, 92, 246, 1)",
            }}
          >
            <Typography
              mt={1}
              variant="h5"
              sx={{
                fontSize: "1rem",
                color: theme.palette.primary.dark,
              }}
            >
              {data.company}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: "1rem",
                color: "rgba(139, 92, 246, 1)",
              }}
            >
              Development Stack
            </Typography>
            <ChipContainer>
              {data.technologies.map((tech) => (
                <Chip
                  variant="outlined"
                  key={tech}
                  label={tech}
                  sx={{
                    mt: "3px",
                    backgroundColor:
                      theme.palette.mode === "dark" ? grey[700] : grey[300],
                  }}
                />
              ))}
            </ChipContainer>
          </Box>
        )}
      </CardContent>
    </FlipCard>
  );
};

export const ResumeCards = () => {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleFlip = (cardId: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        justifyItems: "center",
        my: 2,
        gridTemplateColumns: {
          xs: "320px",
          sm: "repeat(2, 320px)",
          md: "repeat(2, 320px)",
          lg: "repeat(4, 320px)",
          xl: "repeat(4, 320px)",
        },
      }}
    >
      {resumeData.map((cardData) => (
        <FlipCardItem
          key={cardData.id}
          data={cardData}
          isFlipped={flippedCards.has(cardData.id)}
          onFlip={() => handleFlip(cardData.id)}
        />
      ))}
    </Box>
  );
};

const FlipCard = styled(Card)({
  minHeight: 240,
  width: 320,
  cursor: "pointer",
  overflow: "visible",
  opacity: 0.95,
  border: "3px solid transparent",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  transition:
    "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
  transformOrigin: "center",
  willChange: "transform",
  "&:hover": {
    transform: "scale(1.01)",
    opacity: 1,
    "& .star-icon": {
      transform: "scale(1.2) rotate(15deg)",
      color: "#ffed4e",
    },
  },
});

const ChipContainer = styled(Stack)({
  flexDirection: "row",
  gap: 5,
  flexWrap: "wrap",
  marginBottom: 1,
  paddingTop: 10,
  paddingBottom: 15,
  width: "100%",
  justifyContent: "center",
});

interface ResumeCardData {
  id: string;
  title: string;
  company: string;
  duration: string;
  story: string;
  technologies: string[];
}

const resumeData: ResumeCardData[] = [
  {
    id: "card1",
    title: "Customer Success Engineer",
    company: "Fluint.io",
    duration: "2025 - Present",
    story:
      "Sales Pipeline Management meets cutting edge AI, with focus on app integrations, customer support and feature development.",
    technologies: [
      "Integration APIs",
      "Claude Code",
      "React",
      "TypeScript",
      "Vitest",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    id: "card2",
    title: "Fullstack Developer",
    company: "ultraPacer",
    duration: "2025 Contractor",
    story:
      "Building tools for ultramarathon runners to plan and achieve their dreams, one aid station at a time. Real-time tracking meets mapping and data visualizations.",
    technologies: [
      "Vue",
      "TypeScript",
      "Vitest",
      "Bootstrap",
      "Storybook",
      "Node.js",
      "ECharts",
      "API Integrations",
    ],
  },
  {
    id: "card3",
    title: "Fullstack Developer",
    company: "Array",
    duration: "2021 - 2024",
    story:
      "Built live presentation apps for thousands of concurrent users. Learned that excellent test coverage is worth its weight in gold.",
    technologies: [
      "React",
      "TypeScript",
      "RTK Query",
      "Material UI",
      "Laravel",
      "AWS",
      "Web Sockets",
      "Playwright",
      "Docker",
    ],
  },
  {
    id: "card4",
    title: "Fullstack Developer",
    company: "National Renewable Energy Lab",
    duration: "2019 - 2021",
    story:
      "Built web applications to connect professional researchers and administer national energy prize competitions.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "JQuery",
      "Bootstrap",
      "Laravel",
      "PHP",
      "Jenkins",
      "AWS",
    ],
  },
];

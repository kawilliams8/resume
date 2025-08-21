import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  styled,
  Stack,
  Divider,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useState } from "react";
import { FireworkStars } from "./FireworkStars";

const FlipCard = styled(Card)({
  minHeight: 210,
  width: 320,
  cursor: "pointer",
  flexShrink: 0,
  position: "relative",
  overflow: "visible",
  opacity: 0.95,
  background:
    "linear-gradient(#fdfdfd, #fdfdfd) padding-box, linear-gradient(135deg, rgba(6, 182, 212, 0.5) 0%, rgba(139, 92, 246, 0.9) 50%) border-box",
  border: "2px solid transparent",
  borderRadius: "8px",
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
  gap: 10,
  flexWrap: "wrap",
  marginBottom: 25,
  paddingTop: 20,
  paddingBottom: 10,
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
    title: "Fullstack Developer",
    company: "ultraPacer",
    duration: "2025 - Present",
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
    id: "card2",
    title: "Fullstack Developer",
    company: "Array",
    duration: "2021-2024",
    story:
      "Built live presentation apps for thousands of concurrent users. Learned that excellent test coverage is worth its weight in gold.",
    technologies: [
      "React",
      "TypeScript",
      "RTK Query",
      "Material UI",
      "Laravel",
      "Web Sockets",
      "Playwright",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "card3",
    title: "Fullstack Developer",
    company: "National Renewable Energy Lab",
    duration: "2019-2021",
    story:
      "In an agency-like setting, built web applications to connect professional researchers and administer national energy prize competitions.",
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

interface FlipCardItemProps {
  data: ResumeCardData;
  isFlipped: boolean;
  onFlip: () => void;
  index: number;
}

const FlipCardItem = ({
  data,
  isFlipped,
  onFlip,
  index,
}: FlipCardItemProps) => {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      setShowFireworks(true);
      // Hide after animation completes
      setTimeout(() => setShowFireworks(false), 5000);
    }
    onFlip();
  };

  return (
    <FlipCard
      onClick={handleFlip}
      sx={{
        // On sm screens, span both columns and center
        ...(index === 2 && {
          gridColumn: { sm: "span 2", lg: "auto" },
          justifySelf: { sm: "center", lg: "auto" },
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }),
      }}
    >
      <FireworkStars show={showFireworks} />
      <CardContent sx={{ position: "relative", height: "90%" }}>
        {!isFlipped ? (
          <>
            <Typography
              mt="2"
              variant="h4"
              sx={{
                fontSize: "1.75rem",
                color: "rgba(139, 92, 246, 0.8)",
              }}
            >
              {data.title}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle2" mt="4" color="rgba(6, 182, 212, 1)">
              {data.company} • {data.duration}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 2, mb: 1 }}
              color="text.secondary"
            >
              <DoubleArrowIcon
                sx={{
                  color: "#8b5cf6",
                  opacity: 0.05,
                  fontSize: "5rem",
                  position: "absolute",
                  bottom: 90,
                  left: 0,
                }}
              />
              {data.story}
            </Typography>
            <Star
              className="star-icon"
              sx={{
                position: "absolute",
                bottom: 25,
                right: 8,
                color: "#e5c07b",
                fontSize: "1.5rem",
                transition: "transform 0.3s ease, color 0.3s ease",
              }}
            />
          </>
        ) : (
          <Box sx={{ border: ".5px solid lightgrey" }}>
            <ChipContainer>
              {data.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{ mt: "3px", backgroundColor: "rgba(6, 182, 212, 0.2)" }}
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
          sm: "320px 320px",
          lg: "320px 320px 320px",
        },
      }}
    >
      {resumeData.map((cardData, index) => (
        <FlipCardItem
          key={cardData.id}
          data={cardData}
          index={index}
          isFlipped={flippedCards.has(cardData.id)}
          onFlip={() => handleFlip(cardData.id)}
        />
      ))}
    </Box>
  );
};

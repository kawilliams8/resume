import { styled } from "@mui/material";

const animations = [
  "firework1 2.6s ease-out forwards",
  "firework2 1.2s ease-out forwards",
  "firework3 2.9s ease-out forwards",
  "firework4 3.7s ease-out forwards",
  "firework5 2.1s ease-out forwards",
  "firework6 1.8s ease-out forwards",
  "firework7 3.0s ease-out forwards",
  "firework8 2.5s ease-out forwards",
  "firework9 2.3s ease-out forwards",
  "firework10 1.5s ease-out forwards",
  "firework11 2.7s ease-out forwards",
  "firework12 3.2s ease-out forwards",
  "firework13 1.9s ease-out forwards",
  "firework14 2.5s ease-out forwards",
  "firework15 3.4s ease-out forwards",
  "firework16 2.2s ease-out forwards",
];

enum StarColors {
  BRIGHT_YELLOW = "#fff700",
  GOLD = "#ffd700",
  LIGHT_YELLOW = "#ffed4e",
  ORANGE_YELLOW = "#ffa500",
  CORNSILK = "#fff8dc",
  KHAKI = "#f0e68c",
  MATERIAL_YELLOW = "#ffeb3b",
  AMBER = "#ffc107",
}

const colorArray = Object.values(StarColors);

const FireworkStar = styled("div")<{
  delay: number;
  animationType: number;
  colorIndex: number;
}>(({ delay, animationType, colorIndex }) => {
  const startColor = colorArray[colorIndex % colorArray.length];
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "1rem",
    color: startColor,
    animationDelay: `${delay}s`,
    animation: animations[animationType],
    pointerEvents: "none",
    zIndex: 0,
    "&::before": {
      content: '"★"',
      display: "block",
    },
    "@keyframes firework1": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "30%": { opacity: 1, color: StarColors.LIGHT_YELLOW },
      "60%": { color: StarColors.ORANGE_YELLOW },
      "100%": {
        transform: "translate(-130px, -180px) scale(1.8)",
        opacity: 0,
        color: StarColors.CORNSILK,
      },
    },
    "@keyframes firework2": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "40%": { opacity: 1, color: StarColors.GOLD },
      "70%": { color: StarColors.MATERIAL_YELLOW },
      "100%": {
        transform: "translate(30px, -320px) scale(0.6)",
        opacity: 0,
        color: StarColors.KHAKI,
      },
    },
    "@keyframes firework3": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "25%": { opacity: 1, color: StarColors.AMBER },
      "60%": { color: StarColors.BRIGHT_YELLOW },
      "100%": {
        transform: "translate(300px, -90px) scale(1.4)",
        opacity: 0,
        color: StarColors.LIGHT_YELLOW,
      },
    },
    "@keyframes firework4": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "35%": { opacity: 1, color: StarColors.MATERIAL_YELLOW },
      "70%": { color: StarColors.GOLD },
      "100%": {
        transform: "translate(160px, 40px) scale(0.8)",
        opacity: 0,
        color: StarColors.CORNSILK,
      },
    },
    "@keyframes firework5": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "20%": { opacity: 1, color: StarColors.BRIGHT_YELLOW },
      "50%": { color: StarColors.ORANGE_YELLOW },
      "100%": {
        transform: "translate(280px, 250px) scale(1.6)",
        opacity: 0,
        color: StarColors.KHAKI,
      },
    },
    "@keyframes firework6": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "45%": { opacity: 1, color: StarColors.GOLD },
      "75%": { color: StarColors.AMBER },
      "100%": {
        transform: "translate(-50px, 190px) scale(0.9)",
        opacity: 0,
        color: StarColors.LIGHT_YELLOW,
      },
    },
    "@keyframes firework7": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "30%": { opacity: 1, color: StarColors.MATERIAL_YELLOW },
      "65%": { color: StarColors.BRIGHT_YELLOW },
      "100%": {
        transform: "translate(-270px, 110px) scale(1.2)",
        opacity: 0,
        color: StarColors.ORANGE_YELLOW,
      },
    },
    "@keyframes firework8": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "50%": { opacity: 1, color: StarColors.AMBER },
      "80%": { color: StarColors.GOLD },
      "100%": {
        transform: "translate(-200px, -20px) scale(0.7)",
        opacity: 0,
        color: StarColors.CORNSILK,
      },
    },
    "@keyframes firework9": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "35%": { opacity: 1, color: StarColors.LIGHT_YELLOW },
      "70%": { color: StarColors.AMBER },
      "100%": {
        transform: "translate(-90px, -310px) scale(1.1)",
        opacity: 0,
        color: StarColors.GOLD,
      },
    },
    "@keyframes firework10": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "40%": { opacity: 1, color: StarColors.BRIGHT_YELLOW },
      "75%": { color: StarColors.ORANGE_YELLOW },
      "100%": {
        transform: "translate(80px, -190px) scale(1.5)",
        opacity: 0,
        color: StarColors.MATERIAL_YELLOW,
      },
    },
    "@keyframes firework11": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "25%": { opacity: 1, color: StarColors.GOLD },
      "60%": { color: StarColors.CORNSILK },
      "100%": {
        transform: "translate(320px, -40px) scale(0.9)",
        opacity: 0,
        color: StarColors.AMBER,
      },
    },
    "@keyframes firework12": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "30%": { opacity: 1, color: StarColors.KHAKI },
      "65%": { color: StarColors.LIGHT_YELLOW },
      "100%": {
        transform: "translate(140px, 100px) scale(1.3)",
        opacity: 0,
        color: StarColors.BRIGHT_YELLOW,
      },
    },
    "@keyframes firework13": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "45%": { opacity: 1, color: StarColors.ORANGE_YELLOW },
      "80%": { color: StarColors.GOLD },
      "100%": {
        transform: "translate(110px, 270px) scale(1.7)",
        opacity: 0,
        color: StarColors.MATERIAL_YELLOW,
      },
    },
    "@keyframes firework14": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "35%": { opacity: 1, color: StarColors.AMBER },
      "70%": { color: StarColors.BRIGHT_YELLOW },
      "100%": {
        transform: "translate(-100px, 160px) scale(0.8)",
        opacity: 0,
        color: StarColors.CORNSILK,
      },
    },
    "@keyframes firework15": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "40%": { opacity: 1, color: StarColors.MATERIAL_YELLOW },
      "75%": { color: StarColors.KHAKI },
      "100%": {
        transform: "translate(-310px, 60px) scale(1.4)",
        opacity: 0,
        color: StarColors.LIGHT_YELLOW,
      },
    },
    "@keyframes firework16": {
      "0%": {
        transform: "translate(0, 0) scale(0)",
        opacity: 1,
        color: startColor,
      },
      "30%": { opacity: 1, color: StarColors.GOLD },
      "65%": { color: StarColors.ORANGE_YELLOW },
      "100%": {
        transform: "translate(-150px, -280px) scale(1.0)",
        opacity: 0,
        color: StarColors.AMBER,
      },
    },
  };
});

interface FireworkStarsProps {
  show: boolean;
}

export const FireworkStars = ({ show }: FireworkStarsProps) => {
  if (!show) return null;

  const starConfig = [
    // First wave of stars
    { delay: 0.0, animationType: 0, colorIndex: 0 },
    { delay: 0.02, animationType: 1, colorIndex: 1 },
    { delay: 0.0, animationType: 2, colorIndex: 2 },
    { delay: 0.04, animationType: 3, colorIndex: 3 },
    { delay: 0.01, animationType: 4, colorIndex: 4 },
    { delay: 0.05, animationType: 5, colorIndex: 5 },
    { delay: 0.03, animationType: 6, colorIndex: 6 },
    { delay: 0.02, animationType: 7, colorIndex: 7 },
    { delay: 0.0, animationType: 8, colorIndex: 2 },
    { delay: 0.03, animationType: 9, colorIndex: 0 },
    { delay: 0.01, animationType: 10, colorIndex: 4 },
    { delay: 0.04, animationType: 11, colorIndex: 1 },
    { delay: 0.02, animationType: 12, colorIndex: 6 },
    { delay: 0.05, animationType: 13, colorIndex: 3 },
    { delay: 0.0, animationType: 14, colorIndex: 5 },
    { delay: 0.03, animationType: 15, colorIndex: 7 },
    // Second wave
    { delay: 0.1, animationType: 2, colorIndex: 1 },
    { delay: 0.15, animationType: 5, colorIndex: 3 },
    { delay: 0.12, animationType: 8, colorIndex: 0 },
    { delay: 0.18, animationType: 11, colorIndex: 5 },
    { delay: 0.14, animationType: 14, colorIndex: 2 },
    { delay: 0.11, animationType: 0, colorIndex: 4 },
    { delay: 0.16, animationType: 3, colorIndex: 6 },
    { delay: 0.13, animationType: 6, colorIndex: 7 },
    // Third wave
    { delay: 0.2, animationType: 9, colorIndex: 2 },
    { delay: 0.25, animationType: 12, colorIndex: 4 },
    { delay: 0.22, animationType: 15, colorIndex: 1 },
    { delay: 0.28, animationType: 1, colorIndex: 0 },
    { delay: 0.24, animationType: 4, colorIndex: 5 },
    { delay: 0.21, animationType: 7, colorIndex: 3 },
    { delay: 0.26, animationType: 10, colorIndex: 6 },
    { delay: 0.23, animationType: 13, colorIndex: 7 },
    // Fourth wave
    { delay: 0.22, animationType: 9, colorIndex: 2 },
    { delay: 0.27, animationType: 12, colorIndex: 4 },
    { delay: 0.21, animationType: 15, colorIndex: 1 },
    { delay: 0.29, animationType: 1, colorIndex: 0 },
    { delay: 0.29, animationType: 4, colorIndex: 5 },
    { delay: 0.26, animationType: 7, colorIndex: 3 },
    { delay: 0.27, animationType: 10, colorIndex: 6 },
    { delay: 0.28, animationType: 13, colorIndex: 7 },
  ];

  return (
    <>
      {starConfig.map((config, index) => (
        <FireworkStar
          key={index}
          delay={config.delay}
          animationType={config.animationType}
          colorIndex={config.colorIndex}
        />
      ))}
    </>
  );
};

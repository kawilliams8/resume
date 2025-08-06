import React from "react";
import { Typography, Paper, Box, Chip, Stack } from "@mui/material";
import { Info as InfoIcon } from "@mui/icons-material";

const AboutPage: React.FC = () => {
  const technologies: string[] = [
    "Vite",
    "React 18",
    "TypeScript",
    "Material-UI",
    "React Router",
    "AWS Amplify",
  ];

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <InfoIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
          <Typography variant="h4" component="h1">
            About This App
          </Typography>
        </Box>

        <Typography variant="body1" paragraph>
          This application is built with modern web technologies to provide a
          fast, responsive, and scalable user experience with full TypeScript
          support.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Technologies Used:
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {technologies.map((tech: string) => (
            <Chip
              key={tech}
              label={tech}
              variant="outlined"
              color="primary"
              sx={{ mb: 1 }}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default AboutPage;

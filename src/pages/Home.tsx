import React from "react";
import { Typography, Paper, Box, Button } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

const HomePage: React.FC = () => {
  const handleGetStarted = (): void => {
    alert("Hello from Material-UI!");
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <HomeIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Your Vite + React + MUI App
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          This is a modern React application built with Vite, Material-UI,
          TypeScript, and ready for AWS Amplify deployment.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 2 }}
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </Paper>
    </Box>
  );
};

export default HomePage;

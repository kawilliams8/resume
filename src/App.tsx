import { Stack, ThemeProvider, Box } from "@mui/material";
import { ShootingStars } from "./components/ShootingStars";
import { HeroSection } from "./components/HeroSection";
import { CodeDemoSection } from "./components/CodeDemoSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectSection } from "./components/ProjectSection";
import styled from "@emotion/styled";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeToggle } from "./theme/ThemeToggle";
import { createDarkTheme, createLightTheme } from "../src/theme/theme";
import { useMemo, useEffect } from "react";
import { useThemeMode } from "../src/theme/useThemeMode";
import { useComponentPreloader } from "./hooks/useComponentPreloader";
import { usePerformanceMonitor } from "./hooks/usePerformanceMonitor";

export default function App() {
  useComponentPreloader();
  usePerformanceMonitor();
  
  useEffect(() => {
    console.log(
      "⚡️ Thanks for checking under the hood! Let's build something amazing together. ⚡️"
    );
  }, []);
  
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
            <HeroSection />
            <CodeDemoSection />
            <ExperienceSection />
            <ProjectSection />
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


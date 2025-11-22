import { Box, Skeleton, Stack } from "@mui/material";
import { useState, useRef, useEffect, lazy } from "react";
import { useTheme } from "@mui/material/styles";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import { trackSectionView } from "@/utils/analytics";

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  height?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  centered?: boolean;
  sectionName?: string; // For analytics purposes
}

export const LazyComponent = ({
  children,
  fallback,
  height = 200,
  threshold = 0.1,
  rootMargin = "100px",
  className,
  centered = true,
  sectionName,
}: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { trackComponentLoad } = usePerformanceMonitor();

  useEffect(() => {
    const cleanup = trackComponentLoad("LazyComponent");
    return cleanup;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionName) {
            trackSectionView(sectionName);
          }
          observer.disconnect(); // Only load once
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Box
      ref={elementRef}
      className={className}
      sx={{
        minHeight: height,
        width: "100%",
        ...(centered && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }),
      }}
    >
      {isVisible ? children : fallback || <ComponentSkeleton height={height} />}
    </Box>
  );
};

interface SkeletonProps {
  height: number;
  lines?: number;
  centered?: boolean;
}

export const ComponentSkeleton = ({
  height = 200,
  lines = 3,
  centered = true,
}: SkeletonProps) => {
  const theme = useTheme();
  const { trackComponentLoad } = usePerformanceMonitor();

  useEffect(() => {
    const cleanup = trackComponentLoad("ComponentSkeleton");
    return cleanup;
  }, []);

  return (
    <Box
      sx={{
        p: 2,
        minHeight: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ...(centered && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }),
      }}
    >
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          variant="text"
          sx={{
            fontSize: "1.2rem",
            mb: 1,
            width: `${60 + Math.random() * 40}%`,
            bgcolor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.05)",
          }}
        />
      ))}
    </Box>
  );
};

export const LazyCodeBlock = lazy(() =>
  import("../components/CodeBlock").then((module) => ({
    default: module.CodeBlock,
  }))
);
export const LazyResumeCards = lazy(() =>
  import("../components/ResumeCards").then((module) => ({
    default: module.ResumeCards,
  }))
);
export const LazyBotExplainer = lazy(() =>
  import("../components/BotExplainer").then((module) => ({
    default: module.BotExplainer,
  }))
);

export const CodeBlockSkeleton = () => (
  <Box
    sx={{
      background: "rgba(15, 23, 42, 0.9)",
      borderRadius: 2,
      p: 2,
      width: "100%",
      minHeight: 350,
    }}
  >
    {/* File name */}
    <Box
      sx={{
        height: "20px",
        width: "40%",
        background: "rgba(148, 163, 184, 0.3)",
        borderRadius: 1,
        mb: 2,
      }}
    />

    {/* Code lines - no loops, no random */}
    <Box
      sx={{
        height: "16px",
        width: "100%",
        background: "rgba(148, 163, 184, 0.2)",
        borderRadius: "2px",
        mb: "6px",
      }}
    />
    <Box
      sx={{
        height: "16px",
        width: "85%",
        background: "rgba(148, 163, 184, 0.2)",
        borderRadius: "2px",
        mb: "6px",
      }}
    />
    <Box
      sx={{
        height: "16px",
        width: "95%",
        background: "rgba(148, 163, 184, 0.2)",
        borderRadius: "2px",
        mb: "6px",
      }}
    />
    <Box
      sx={{
        height: "16px",
        width: "70%",
        background: "rgba(148, 163, 184, 0.2)",
        borderRadius: "2px",
        mb: "6px",
      }}
    />
    <Box
      sx={{
        height: "16px",
        width: "90%",
        background: "rgba(148, 163, 184, 0.2)",
        borderRadius: "2px",
        mb: "6px",
      }}
    />
  </Box>
);

export const ResumeCardsSkeleton = () => (
  <Stack
    direction={{ xs: "column", md: "row" }}
    sx={{ gap: 2, width: "100%", mt: 2 }}
  >
    {[1, 2, 3, 4].map((i) => (
      <Box
        key={i}
        sx={{
          background: "rgba(15, 23, 42, 0.8)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          borderRadius: 2,
          p: 2,
          flex: 1,
          minHeight: 200,
        }}
      >
        <Box
          sx={{
            height: "24px",
            width: "80%",
            background: "rgba(168, 85, 247, 0.3)",
            borderRadius: 1,
            mb: 1,
          }}
        />
        <Box
          sx={{
            height: "16px",
            width: "60%",
            background: "rgba(6, 182, 212, 0.3)",
            borderRadius: 1,
            mb: 1,
          }}
        />
        <Box
          sx={{
            height: "14px",
            width: "40%",
            background: "rgba(148, 163, 184, 0.3)",
            borderRadius: 1,
            mb: 2,
          }}
        />
        <Box
          sx={{
            height: "14px",
            width: "90%",
            background: "rgba(148, 163, 184, 0.2)",
            borderRadius: 1,
            mb: 1,
          }}
        />
        <Box
          sx={{
            height: "14px",
            width: "75%",
            background: "rgba(148, 163, 184, 0.2)",
            borderRadius: 1,
            mb: 1,
          }}
        />
        <Box
          sx={{
            height: "14px",
            width: "85%",
            background: "rgba(148, 163, 184, 0.2)",
            borderRadius: 1,
            mb: 1,
          }}
        />
      </Box>
    ))}
  </Stack>
);

export const BotExplainerSkeleton = () => {
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      {/* Title */}
      <Box
        sx={{
          height: "32px",
          width: "70%",
          background: "rgba(168, 85, 247, 0.3)",
          borderRadius: 1,
          mx: "auto",
          mb: 2,
        }}
      />

      {/* Command buttons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", mb: 3, flexWrap: "wrap" }}
      >
        <Box
          sx={{
            height: "36px",
            width: "120px",
            background: "rgba(6, 182, 212, 0.3)",
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            height: "36px",
            width: "140px",
            background: "rgba(6, 182, 212, 0.3)",
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            height: "36px",
            width: "130px",
            background: "rgba(6, 182, 212, 0.3)",
            borderRadius: 1,
          }}
        />
        <Box
          sx={{
            height: "36px",
            width: "110px",
            background: "rgba(6, 182, 212, 0.3)",
            borderRadius: 1,
          }}
        />
      </Stack>

      {/* Terminal window */}
      <Box
        sx={{
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          borderRadius: 2,
          p: 3,
          minHeight: 300,
        }}
      >
        {/* Terminal header */}
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#ef4444",
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#f59e0b",
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: "#10b981",
            }}
          />
        </Box>

        {/* Terminal content */}
        <Box
          sx={{
            height: "30px",
            width: "60%",
            background: "rgba(6, 182, 212, 0.2)",
            borderRadius: 1,
            mb: 2,
          }}
        />
        <Box
          sx={{
            height: "20px",
            width: "80%",
            background: "rgba(6, 182, 212, 0.2)",
            borderRadius: 1,
            mb: 2,
          }}
        />
        <Box
          sx={{
            height: "20px",
            width: "70%",
            background: "rgba(6, 182, 212, 0.2)",
            borderRadius: 1,
            mb: 2,
          }}
        />
        <Box
          sx={{
            height: "20px",
            width: "90%",
            background: "rgba(6, 182, 212, 0.2)",
            borderRadius: 1,
            mb: 2,
          }}
        />
        <Box
          sx={{
            height: "20px",
            width: "65%",
            background: "rgba(6, 182, 212, 0.2)",
            borderRadius: 1,
            mb: 2,
          }}
        />
      </Box>
    </Box>
  );
};

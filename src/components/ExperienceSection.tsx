import { Suspense } from "react";
import { Typography, Stack } from "@mui/material";
import {
  LazyComponent,
  ComponentSkeleton,
  LazyResumeCards,
  ResumeCardsSkeleton,
} from "../utils/LazyComponent";

export const ExperienceSection = () => {
  return (
    <>
      <LazyComponent
        height={20}
        centered={true}
        rootMargin="100px"
        fallback={
          <ComponentSkeleton height={80} centered={true} lines={2} />
        }
      >
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
      </LazyComponent>
      <LazyComponent
        height={100}
        centered={true}
        rootMargin="150px"
        fallback={
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ gap: 2, width: "100%", mt: 2 }}
          >
            <ResumeCardsSkeleton />
          </Stack>
        }
      >
        <Suspense
          fallback={
            <ComponentSkeleton height={600} centered={true} lines={12} />
          }
        >
          <LazyResumeCards />
        </Suspense>
      </LazyComponent>
    </>
  );
};
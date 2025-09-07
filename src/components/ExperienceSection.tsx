import { Suspense } from "react";
import { Stack } from "@mui/material";
import {
  LazyComponent,
  ComponentSkeleton,
  LazyResumeCards,
  ResumeCardsSkeleton,
} from "../utils/LazyComponent";
import { SectionTitle } from "./SectionTitle";

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
        <SectionTitle>PROFESSIONAL EXPERIENCE:</SectionTitle>
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
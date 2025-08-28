import { Suspense } from "react";
import { Typography } from "@mui/material";
import {
  LazyComponent,
  ComponentSkeleton,
  LazyBotExplainer,
  BotExplainerSkeleton,
} from "../utils/LazyComponent";

export const ProjectSection = () => {
  return (
    <>
      <LazyComponent
        height={80}
        centered={true}
        rootMargin="200px"
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
          PERSONAL PROJECT:
        </Typography>
      </LazyComponent>
      <LazyComponent
        height={500}
        centered={true}
        rootMargin="200px"
        fallback={<BotExplainerSkeleton />}
      >
        <Suspense
          fallback={
            <ComponentSkeleton height={500} centered={true} lines={10} />
          }
        >
          <LazyBotExplainer />
        </Suspense>
      </LazyComponent>
    </>
  );
};
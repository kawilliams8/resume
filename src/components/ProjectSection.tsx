import { Suspense } from "react";
import {
  LazyComponent,
  ComponentSkeleton,
  LazyBotExplainer,
  BotExplainerSkeleton,
} from "../utils/LazyComponent";
import { SectionTitle } from "./SectionTitle";

export const ProjectSection = () => {
  return (
    <>
      <LazyComponent
        height={80}
        centered={true}
        rootMargin="200px"
        fallback={<ComponentSkeleton height={80} centered={true} lines={2} />}
      >
        <SectionTitle>PERSONAL PROJECT:</SectionTitle>
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

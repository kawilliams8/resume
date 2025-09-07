import { Suspense } from "react";
import { LazyComponent, ComponentSkeleton } from "../utils/LazyComponent";
import { SkillsOrganizer } from "./SkillsOrganizer";
import { SectionTitle } from "./SectionTitle";

export const DragDropSection = () => {
  return (
    <>
      <LazyComponent
        height={20}
        centered={true}
        rootMargin="600px"
        sectionName="skills-title"
        fallback={<ComponentSkeleton height={80} centered={true} lines={2} />}
      >
        <SectionTitle>TECHNICAL SKILLS:</SectionTitle>
      </LazyComponent>
      <LazyComponent
        height={400}
        centered={false}
        rootMargin="600px"
        sectionName="skills-organizer"
        fallback={<ComponentSkeleton height={600} centered={true} lines={12} />}
      >
        <Suspense
          fallback={
            <ComponentSkeleton height={600} centered={true} lines={12} />
          }
        >
          <SkillsOrganizer />
        </Suspense>
      </LazyComponent>
    </>
  );
};

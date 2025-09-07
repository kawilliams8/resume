import { Suspense } from "react";
import { Stack } from "@mui/material";
import {
  LazyComponent,
  ComponentSkeleton,
  LazyCodeBlock,
  CodeBlockSkeleton,
} from "../utils/LazyComponent";

const code1 = `
  const top_applicant: Applicant = {
  "candidate": "Katherine Williams",
  "years_of_experience": 7,
  "education": "Turing School of Software and Design - Frontend Engineering",
  "work_environment" : "remote",
  "interview": {
    "technical": "passed",
    "behavioral": "nailed it",
    "team_fit": "excellent"
  },
  "offer": {
    "position": "Senior Frontend Engineer",
    "responsibilities": ["UI Development", "End-to-End Testing", "Mentorship" ],
    "salary": "competitive",
    "start_date": "ASAP"
  },
  "next_steps": [
    "Sign offer letter ✍️",
    "Celebrate 🎉",
    "Clone the repo 🧑‍💻",
    "Hit the ground running 🔥"
  ]
}`;

const code2 = `
type Position = 'Senior Frontend Engineer' | 'Frontend Engineer' | 'Junior Frontend Engineer';
type WorkEnvironment = 'remote' | 'hybrid' | 'onsite';
type InterviewStatus = 'passed' | 'failed' | 'pending';

interface Applicant {
  candidate: string;
  years_of_experience: number;
  education: string;
  work_environment: WorkEnvironment;
  interview: {
    technical: InterviewStatus;
    behavioral: string;
    team_fit: 'excellent' | 'good' | 'fair' | 'poor';
  };
  offer: {
    position: Position;
    responsibilities: string[];
    salary: string;
    start_date: string;
  };
  next_steps: string[];
}`;

export const CodeDemoSection = () => {
  return (
    <LazyComponent
      height={200}
      rootMargin="50px"
      centered={true}
      sectionName="code-demo"
      fallback={
        <Stack direction={{ xs: "column", lg: "row" }} mt={2}>
          <CodeBlockSkeleton />
        </Stack>
      }
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        mt={2}
        alignItems="center"
      >
        <Suspense
          fallback={
            <ComponentSkeleton
              height={350}
              centered={true}
              lines={15}
            />
          }
        >
          <LazyCodeBlock
            code={code1}
            title="top_applicant.ts"
            withTypewriter
          />
        </Suspense>
        <Suspense
          fallback={
            <ComponentSkeleton
              height={350}
              centered={true}
              lines={15}
            />
          }
        >
          <LazyCodeBlock code={code2} title="types/index.ts" />
        </Suspense>
      </Stack>
    </LazyComponent>
  );
};
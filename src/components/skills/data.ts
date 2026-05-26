import { Skill, Category } from "./types";

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "frontend",
    years: 7,
    context: "Design systems & UX",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    years: 5,
    context: "Type-safe at scale",
  },
  {
    id: "tanstack",
    name: "TanStack Query",
    category: "frontend",
    years: 2,
    context: "Async server state",
  },
  {
    id: "dataviz",
    name: "Data Viz",
    category: "frontend",
    years: 3,
    context: "Dashboards & charts",
  },
  {
    id: "ui",
    name: "UI Libraries",
    category: "frontend",
    years: 7,
    context: "Accessible, fast UI",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    years: 7,
    context: "Backend services",
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "backend",
    years: 1,
    context: "Scalable REST APIs",
  },
  {
    id: "llm",
    name: "LLM Integration",
    category: "backend",
    years: 1,
    context: "Gemini & Claude APIs",
  },
  {
    id: "observability",
    name: "Observability",
    category: "tools",
    years: 3,
    context: "Sentry, Datadog, Grafana",
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    years: 3,
    context: "Containerized apps",
  },
];

export const categories: Category[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "UI/UX & interfaces",
    color: "#8b5cf6",
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Server-side tasks and data",
    color: "#06b6d4",
  },
  {
    id: "tools",
    name: "Tools and DevOps",
    description: "Workflow and reliability",
    color: "#3b82f6",
  },
];

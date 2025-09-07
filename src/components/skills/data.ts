import { Skill, Category } from "./types";

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "frontend",
    years: 7,
    context: "Fortune 500 client apps",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    years: 4,
    context: "Type-safe applications",
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "frontend",
    years: 2,
    context: "Component architecture",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    years: 3,
    context: "Server-side development",
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    years: 3,
    context: "APIs and testing",
  },
  {
    id: "git",
    name: "GitHub",
    category: "tools",
    years: 7,
    context: "Version control and Actions",
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    years: 3,
    context: "Containerization",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    years: 7,
    context: "Core web language",
  },
  {
    id: "css",
    name: "UI Libraries",
    category: "frontend",
    years: 6,
    context: "Styling and animations",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "backend",
    years: 5,
    context: "Database design",
  },
  {
    id: "express",
    name: "Express.js",
    category: "backend",
    years: 7,
    context: "REST APIs and middleware",
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
    years: 3,
    context: "Cloud infrastructure",
  },
  {
    id: "ide",
    name: "Cursor AI",
    category: "tools",
    years: 1,
    context: "AI-assisted dev environment",
  },
  {
    id: "clause",
    name: "Claude Code",
    category: "tools",
    years: 1,
    context: "CLI-based AI editor and assistant",
  },
];

export const categories: Category[] = [
  {
    id: "frontend",
    name: "Frontend Expertise",
    description: "UI/UX Development",
    color: "#8b5cf6",
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Server-side technologies",
    color: "#06b6d4",
  },
  {
    id: "tools",
    name: "Tools and DevOps",
    description: "Development workflow",
    color: "#3b82f6",
  },
];

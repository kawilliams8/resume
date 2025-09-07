export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools";
  years: number;
  context: string;
}

export interface Category {
  id: "frontend" | "backend" | "tools";
  name: string;
  description: string;
  color: string;
}

export const ItemType = "SKILL";

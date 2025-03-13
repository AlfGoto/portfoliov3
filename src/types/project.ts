import type { Review } from "./review";

export interface Project {
  name: string;
  description: string;
  images: string[];
  banner?: string;
  url?: string;
  reviews?: Review[];
  videos?: string[];
  languages?: (
    | "JS"
    | "CSS"
    | "PHP"
    | "Three.js"
    | "NEXT"
    | "AWS"
    | "Supabase"
    | "Mui"
    | "Tailwind"
    | ".NET"
    | "Neon"
    | "Basalf"
  )[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Digital Agency",
    duration: "2024 - 2026",
    description:
      "Built and maintained multiple client-facing web applications. Collaborated with design teams to implement pixel-perfect UI components.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Startup Inc.",
    duration: "2023 - 2024",
    description:
      "Developed responsive web applications and contributed to the company's design system. Improved page load times by 60%.",
    techStack: ["React", "JavaScript", "Firebase"],
  },
];

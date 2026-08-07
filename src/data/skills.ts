export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export const skillCategories = [
  "Frontend",
  "Backend",
  "Tools & DevOps",
  "Design",
] as const;

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "JavaScript", icon: "💛", category: "Frontend" },
  { name: "HTML/CSS", icon: "🎨", category: "Frontend" },
  { name: "Vue.js", icon: "💚", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: "💚", category: "Backend" },
  { name: "Python", icon: "🐍", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Backend" },
  { name: "REST APIs", icon: "🔗", category: "Backend" },
  // Tools & DevOps
  { name: "Git", icon: "📦", category: "Tools & DevOps" },
  { name: "Docker", icon: "🐳", category: "Tools & DevOps" },
  { name: "Linux", icon: "🐧", category: "Tools & DevOps" },
  { name: "Vercel", icon: "▲", category: "Tools & DevOps" },
  { name: "Render", icon: "", category: "Tools & DevOps" },
  // Design
  { name: "UI/UX", icon: "✨", category: "Design" },
  { name: "Responsive", icon: "📱", category: "Design" },
  { name: "Animation", icon: "🎬", category: "Design" },
];

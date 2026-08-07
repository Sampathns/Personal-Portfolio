export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Items.LK',
    description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    image: '/images/projects/project1.png',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com/Sampathns/E-items.lk.git',
    liveUrl: 'https://e-items-lk-1.onrender.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'HealthChat Application',
    description:'Healthcare Platform Your health powered by AI Connect with top doctors, get AI-powered health insights, manage appointments and prescriptions  all in one place',
    image: '/images/projects/project2.png',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/Sampathns/HealthChat-Application-.git',
    liveUrl: 'https://healthchat-application-tgt1.onrender.com/',
    featured: true,
  },
  

];

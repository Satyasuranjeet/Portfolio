export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  work: string[];
  type: 'work' | 'community';
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'infosys-current',
    company: 'Infosys',
    role: 'Specialist Programmer (STG)',
    period: 'Feb 2026 – Present',
    location: 'Hyderabad, India',
    current: true,
    type: 'work',
    stack: ['MERN', 'TypeScript', 'Tailwind', 'AWS', 'Docker', 'Playwright', 'Claude', 'Amazon Q'],
    work: [
      'AI-Driven UI Developer — pixel-perfect Figma→React translation',
      'Scalable AWS deployments and CI/CD automation',
      'Implementing E2E testing with Playwright'
    ]
  },
  {
    id: 'infosys-trainee',
    company: 'Infosys',
    role: 'Specialist Programmer Trainee',
    period: 'Oct 2025 – Feb 2026',
    location: 'Mysore, India',
    type: 'work',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'AWS', 'Azure', 'Jenkins'],
    work: [
      'Building responsive UIs and backend services',
      'Containerisation with Docker',
      'Agile sprints and Git workflow'
    ]
  },
  {
    id: 'highradius',
    company: 'HighRadius',
    role: 'CV Tech Intern',
    period: 'Jun 2024 – Dec 2024',
    location: 'Bhubaneswar, India',
    type: 'work',
    stack: ['React', 'Fintech', 'Enterprise UI'],
    work: [
      'Fintech platform frontend development',
      'Enterprise-grade UI consistency'
    ]
  },
  {
    id: 'gdsc',
    company: 'GDSC ITER',
    role: 'Technical Team',
    period: 'Aug 2023 – Jun 2025',
    location: 'Bhubaneswar',
    type: 'community',
    stack: ['Mentorship', 'Event Org', 'Community'],
    work: [
      'Technical mentor and event organiser',
      'Community tech builder'
    ]
  }
];

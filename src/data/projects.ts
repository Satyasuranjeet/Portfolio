export interface Project {
  id: string;
  title: string;
  description: string;
  repo: string;
  live?: string;
  stars: number;
  forks?: number;
  commits?: number;
  stack: string[];
  angle: string;
  color: string;
  featured: boolean;
  apk?: boolean;
}

export const projects: Project[] = [
  {
    id: 'emoji-encrypt',
    title: 'Emoji-Encrypt-x (EncryptCT)',
    description: 'Military-grade text encryption that transforms sensitive text into colorful emoji sequences. Uses AES-256-GCM encryption with 600,000 iterations (OWASP 2024).',
    repo: 'https://github.com/Satyasuranjeet/Emoji-Encrypt-x',
    live: 'https://emoji-encrypt-x.vercel.app',
    stars: 2,
    stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'Framer Motion'],
    angle: 'AES-256 + emojis. Military security with a fun face.',
    color: '#7c3aed',
    featured: true
  },
  {
    id: 'stinum',
    title: 'Stinum_V1.0',
    description: 'AI-powered chatbot using OpenAI GPT-3. Early mover in LLM integration, built before AI chat apps became mainstream.',
    repo: 'https://github.com/Satyasuranjeet/Stinum_V1.0',
    live: 'https://stinum-v1-0.vercel.app',
    stars: 7,
    forks: 3,
    stack: ['JavaScript', 'CSS', 'OpenAI GPT-3', 'Node.js'],
    angle: 'Built before AI chatbots were mainstream.',
    color: '#00d9f5',
    featured: true
  },
  {
    id: 'wakitaki',
    title: 'WakiTaki',
    description: 'Cross-platform push-to-talk walkie-talkie app. Real-time voice streaming via WebRTC, room codes, and custom notification sounds.',
    repo: 'https://github.com/Satyasuranjeet/WakiTaki',
    stars: 2,
    apk: true,
    stack: ['Flutter', 'Dart', 'WebRTC', 'Socket.IO'],
    angle: 'Real APK. Real WebRTC. Real-time voice globally.',
    color: '#ff6b6b',
    featured: true
  },
  {
    id: 'picoanime',
    title: 'PicoAnime',
    description: 'Anime character card browser with flip-card UX. Community favorite with more forks than stars, showing high developer engagement.',
    repo: 'https://github.com/Satyasuranjeet/PicoAnime',
    live: 'https://satyasuranjeet.github.io/PicoAnime/',
    stars: 26,
    forks: 28,
    commits: 155,
    stack: ['HTML', 'CSS', 'JavaScript'],
    angle: '28 forks > 26 stars = community credibility.',
    color: '#4c1d95',
    featured: true
  },
  {
    id: 'rag-project',
    title: 'RAG Implementation',
    description: 'Retrieval-Augmented Generation system using Python and LangChain. Implements advanced PDF vectorization and semantic search to eliminate LLM hallucinations.',
    repo: 'https://github.com/Satyasuranjeet/RAG-Project',
    stars: 12,
    stack: ['Python', 'LangChain', 'FAISS', 'Gemini AI'],
    angle: 'Built the retrieval layer, not just calling an API.',
    color: '#10b981',
    featured: true
  },
  {
    id: 'project-nura',
    title: 'Project Nura',
    description: 'Autonomous AI agent framework designed for modular task execution and complex problem solving using specialized sub-agents.',
    repo: 'https://github.com/Satyasuranjeet/Project-Nura',
    stars: 8,
    stack: ['Python', 'FastAPI', 'Redis', 'OpenAI'],
    angle: 'Multi-agent orchestration in production.',
    color: '#f59e0b',
    featured: true
  },
  {
    id: 'birthday',
    title: 'Happy Birthday Project',
    description: 'Personalized interactive birthday experience built with empathy and creative code.',
    repo: 'https://github.com/Satyasuranjeet/Birthday',
    stars: 3,
    stack: ['React', 'Framer Motion', 'Tailwind'],
    angle: 'Developer with empathy. Building for people.',
    color: '#f472b6',
    featured: false
  }
];

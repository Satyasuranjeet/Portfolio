export interface SkillGroup {
  category: string;
  skills: { name: string; icon?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js' }, { name: 'Next.js' }, { name: 'Flutter' },
      { name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'Tailwind CSS' },
      { name: 'Redux' }, { name: 'Figma' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' }, { name: 'Express.js' }, { name: 'Python' },
      { name: 'Java' }, { name: 'FastAPI' }, { name: 'Go' },
      { name: 'PostgreSQL' }, { name: 'MongoDB' }, { name: 'Redis' },
      { name: 'WebRTC' }, { name: 'Socket.IO' }
    ]
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'RAG' }, { name: 'LangChain' }, { name: 'LlamaIndex' },
      { name: 'Vector DBs' }, { name: 'Pinecone' }, { name: 'OpenAI GPT' },
      { name: 'Gemini AI' }, { name: 'Claude' }, { name: 'TensorFlow' },
      { name: 'PyTorch' }, { name: 'OpenCV' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, IAM)' }, { name: 'GCP' }, { name: 'Azure' },
      { name: 'Docker' }, { name: 'Jenkins' }, { name: 'GitHub Actions' },
      { name: 'Linux' }
    ]
  }
];

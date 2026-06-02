export interface Skills{
    category: string,
    items: string[]
}

// 기술 스택
export const skills = [
  { category: 'Frontend', items: ['React', 'Next.js','TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'] },
  { category: 'Backend', items: ['Node.js', 'Prisma', 'Supabase'] },
  { category: 'Database', items: ['MySQL'] },
  { category: 'DevOps', items: ['GCP', 'Docker', 'Vercel'] },
  { category: 'Tools', items: ['Slack', 'Notion', 'GitHub', 'Figma']}
];
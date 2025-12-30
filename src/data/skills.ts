export interface Skills{
    category: string,
    item: string[]
}

// 기술 스택
export const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'] },
  { category: 'Backend', items: ['Node.js', 'Nest.js', 'Express', 'TypeORM', 'Java'] },
  { category: 'Database', items: ['MySQL', 'MariaDB'] },
  { category: 'DevOps', items: ['GCP', 'Docker', 'GitHub', 'AWS'] },
  { category: 'Tools', items: ['Slack', 'Notion', 'GitHub', 'Figma']}
];
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

// 프로젝트 데이터
export const projects: Project[] = [
    {
        id: 1,
        title: '데이터 요청 자동화 시스템',
        description: '수작업 수 시간 소요되던 데이터 추출 프로세스를 5분 이내로 단축. TypeORM과 Nest.js 기반 자동화 시스템 구축.',
        tech: ['Nest.js', 'TypeORM', 'GCP', 'Slack API'],
        github: 'https://github.com/yourusername/project1',
        demo: 'https://demo.example.com',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        description: '실시간 재고 관리와 결제 시스템이 통합된 전자상거래 플랫폼. React와 Node.js 풀스택 개발.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/yourusername/project2',
        demo: 'https://demo.example.com',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
    },
    {
        id: 3,
        title: 'Task Management Dashboard',
        description: '팀 협업을 위한 실시간 태스크 관리 대시보드. 드래그 앤 드롭 기능과 실시간 알림 구현.',
        tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
        github: 'https://github.com/yourusername/project3',
        demo: 'https://demo.example.com',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
    }
];
import tripImg from '@/assets/image/trip.png'
import siloImg from '@/assets/image/silo.png'
import pengdiImg from '@/assets/image/pengdi.png'
import bookImg from '@/assets/image/book.jpg'
import gameImg from '@/assets/image/game.jpg'


export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
}

// 프로젝트 데이터
export const projects: Project[] = [
    {
        id: 1,
        title: 'Trip Together',
        description: '사용자들이 직접 여행 일정을 만들고 공유하며, 일정에 대한 피드백을 받을 수 있는 플랫폼.',
        tech: ['React', 'TypeScript', 'Node.js', 'TypeORM', 'MySQL', 'AWS'],
        github: 'https://github.com/Trip-Togethers',
        demo:'https://www.youtube.com/watch?v=qPP9TX6dpKo',
        image: tripImg
    },
    {
        id: 2,
        title: 'Pengdi Chatbot',
        description: '남도마켓의 스마트 AI 가이드: 궁금한 점을 실시간으로 해결해 드립니다',
        tech: ['React', 'TypeScript', 'HTML/CSS', 'Figma'],
        image: pengdiImg
    },
    {
        id: 3,
        title: '실로풍경',
        description: '실현과 소통이 담긴 다채로운 상품의 풍경을 제공하며, 사용자에게 안락하고 편안한 온라인 쇼핑 공간을 선사하는 플랫폼.',
        tech: ['JavaScript', 'HTML/CSS', 'Java', 'MySQL', 'Eclipse'],
        github: 'https://github.com/haerimi/WebMarket',
        demo: 'https://www.youtube.com/watch?v=fhaage5Lp0c',
        image: siloImg
    },
    {
        id: 4,
        title: 'ND-Automation',
        description: '반복적인 데이터 추출 및 관리 업무를 자동화하고, 주요 지표를 슬랙(Slack)으로 실시간 전송하는 데이터 알림 시스템.',
        tech: ['React', 'TypeScript', 'Node.js', 'MariaDB'],
        image: bookImg
    },
    {
        id: 5,
        title: 'Book Store',
        description: '프로그래머스 풀스택 과정 수강 중, Node.js와 React를 활용하여 개발한 플랫폼.',
        tech: ['React', 'TypeScript', 'Node.js', 'MariaDB'],
        github: 'https://github.com/haerimi/Book-store',
        image: bookImg
    },
    {
        id: 6,
        title: "The Rabbit's Journey Game",
        description: '진정한 먹방의 즐거움을 찾기 위해 단 하나의 전설적인 식재료를 찾아 떠나는 미식가 캐릭터의 모험기.',
        tech: ['C#', 'Unity'],
        github: 'https://github.com/haerimi/The-Rabbit-s?tab=readme-ov-file',
        demo: 'https://www.youtube.com/watch?v=pSKh4qiiEGE',
        image: gameImg
    }
];
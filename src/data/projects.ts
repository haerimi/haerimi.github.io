import tripImg from '@/assets/image/trip/trip.png'
import siloImg from '@/assets/image/silo/silo.png'
import pengdiImg from '@/assets/image/pengdi/pengdi.png'
import bookImg from '@/assets/image/book/book.jpg'
import gameImg from '@/assets/image/game/game.jpg'
import codeImg from '@/assets/image/auto/code.jpg'
import trip1 from '@/assets/image/trip/trip-1.png'
import trip2 from '@/assets/image/trip/trip-2.png'
import trip3 from '@/assets/image/trip/trip-3.png'
import trip4 from '@/assets/image/trip/trip-4.png'
import trip5 from '@/assets/image/trip/trip-5.png'
import pengdi1 from '@/assets/image/pengdi/pengdi-1.png'
import pengdi2 from '@/assets/image/pengdi/pengdi-2.png'
import pengdi3 from '@/assets/image/pengdi/pengdi-3.png'
import silo1 from '@/assets/image/silo/silo-1.png'
import silo2 from '@/assets/image/silo/silo-2.png'
import silo3 from '@/assets/image/silo/silo-3.png'
import auto from '@/assets/image/auto/automation.png'

export interface FeatureDetail {
    title: string;
    description: string;
    image: string;
}

export interface ProjectDetails {
    overview: {
        description: string;
        image?: string;
    };
    features?: FeatureDetail[];
    techDetails?: string;
    myRole?: string;
    period?: string;
}

export interface Project {
    id: number;
    title: string;
    description?: string;
    tech?: string[];
    github?: string;
    demo?: string;
    image?: string;
    details?: ProjectDetails;
}

// 프로젝트 데이터
export const projects: Project[] = [
    {
        id: 1,
        title: 'Trip Together',
        description: '사용자들이 직접 여행 일정을 만들고 공유하며, 일정에 대한 피드백을 받을 수 있는 플랫폼.',
        tech: ['React', 'TypeScript', 'Node.js', 'TypeORM', 'MySQL', 'AWS'],
        github: 'https://github.com/Trip-Togethers',
        demo: 'https://www.youtube.com/watch?v=qPP9TX6dpKo',
        image: tripImg,
        details: {
            overview: {
                description: `
### 🚀 개요 
**프로그래머스 풀스택 부트캠프**에서 서비스 전 과정을 직접 개발하며, 프론트엔드와 백엔드, 인프라가 유기적으로 연결되는 **전체 시스템 메커니즘**을 깊이 있게 이해하게 되었습니다.

특히 **AWS S3**를 활용한 이미지 업로드 API 연동을 통해 **클라우드 기반의 실무적 데이터 처리 프로세스**를 체득했으며, 
사용자의 여행 계획을 시각화하는 **직관적인 일정 생성 UI**와 **동적 상태 피드백 시스템**을 구현하며 사용자 경험(UX)을 극대화하는 방법을 학습했습니다. 

결과적으로 데이터가 생성되고 서버를 거쳐 화면에 렌더링되기까지의 흐름을 파악함으로써, 
**백엔드 소통 역량**을 갖춘 프론트엔드 개발자로서 **효율적인 상태 관리**와 **데이터 구조 설계의 중요성**을 깨달은 소중한 경험이었습니다.
`,
                image: tripImg
            },
            features: [
                {
                    title: '동적 폼 기반 여행 일정 수립 엔진',
                    description: '직관적인 입력 UI와 효율적인 데이터 구조 설계를 통해 사용자가 손쉽게 여행 계획을 수립하고 서버에 저장할 수 있는 통합 프로세스를 구축했습니다.',
                    image: trip1
                },
                {
                    title: '일자별 스케줄링 기반 일자별 세부 플래너',
                    description: '입력된 계획을 날짜 및 시간 단위로 세분화하여 관리할 수 있는 상세 플래닝 기능을 구현했습니다. 백엔드 데이터 정렬 로직을 통해 타임라인 형태의 인터페이스를 제공합니다.',
                    image: trip2
                },
                {
                    title: '위치 데이터 시각화 및 장소 저장 시스템',
                    description: 'Google Maps API를 연동하여 여행지를 지도 상에 시각화하고, 관심 있는 장소와 일정을 개인 저장소에 북마크하여 관리할 수 있는 기능을 구현했습니다.',
                    image: trip3
                },
                {
                    title: '대시보드형 일정 통합 캘린더',
                    description: '사용자가 생성한 모든 일정을 캘린더 인터페이스로 통합하여 시각화했습니다. 날짜별 일정 밀도를 한눈에 파악할 수 있어 효율적인 스케줄 관리가 가능합니다.',
                    image: trip4
                },
                {
                    title: '일정 연동형 소셜 공유 및 인터랙션',
                    description: '작성된 일정을 게시글로 즉시 불러와 공유할 수 있는 데이터 연동 기능을 개발했습니다. 댓글과 추천 등 소셜 기능을 통해 사용자 간 활발한 정보 교류를 지원합니다.',
                    image: trip5
                }
            ],
            period: '2025.01 - 2025.02 (1개월)',
            myRole: '팀장 | 여행 일정 관리 모듈 Full-stack 개발 및 API 설계 주도'
        }
    },
    {
        id: 2,
        title: 'Pengdi Chatbot',
        description: '남도마켓의 스마트 AI 가이드: 궁금한 점을 실시간으로 해결해 드립니다',
        tech: ['React', 'TypeScript', 'Docker', 'HTML/CSS', 'Figma'],
        image: pengdiImg,
        details: {
            overview: {
                description: `
### 🚀 개요 
2주간 챗봇 서비스의 **프론트엔드 구축부터 GCP 배포**까지 전 과정을 주도하며, **실무 환경에서 개발과 운영이 연결되는 전체 흐름**을 깊이 있게 학습했습니다. 

특히 원자 단위의 **공통 컴포넌트를 설계**하며 다양한 UI 요구사항에 유연하게 대응하기 위해 **확장성 있는 속성값(Props) 설계**가 **필수적**임을 깨달았습니다. 
컴포넌트에 세밀한 속성값을 부여함으로써 **재사용성은 높이고 중복 코드는 줄이는 효율적인 설계 방식**을 체득했습니다.

또한, **도커(Docker) 이미지를 생성하여 GCP에 배포하는 과정**을 직접 수행하며, 복잡해 보이는 인프라 구축도 **단계별로 접근**하면 충분히 해결할 수 있다는 기술적 자신감을 얻었습니다. 
이 과정에서 스스로 작성한 **코드의 복잡도**를 객관적으로 돌아보며, 협업과 유지보수를 위해 **'누구나 읽기 쉬운 단순한 구조'**를 지향해야 한다는 개발 철학을 갖게 되었습니다.

결과적으로 단순히 기능을 구현하는 것을 넘어, **안정적인 배포와 클린 코드**를 고민하는 프론트엔드 개발자로 한 단계 성장할 수 있었던 소중한 시간이었습니다.
`,
                image: pengdiImg
            },
            features: [
                {
                    title: '인터렉티브 가이드 & 대화형 UI 구현',
                    description: '사용자의 진입을 돕는 가이드 시스템과 버튼 기반의 인터렉티브 질의응답 UI를 구축했습니다. 조건부 렌더링 기술을 활용하여 사용자의 선택에 따라 실시간으로 변화하는 맞춤형 답변 화면을 구현했습니다.',
                    image: pengdi1
                },
                {
                    title: '동적 상태 피드백 및 로딩 애니메이션',
                    description: '지루할 수 있는 대기 시간을 UX적으로 해결하기 위해 5초 주기 랜덤 메시지 출력 시스템을 개발했습니다. Styled-components와 CSS Keyframes로 순차적 움직임의 로딩 도트 애니메이션을 제작하여 시각적 완성도를 높였습니다.',
                    image: pengdi2
                },
                {
                    title: '사용자 맞춤형 상품 추천 인터페이스',
                    description: '사용자의 의도가 반영된 분석 데이터를 기반으로 최적의 여행 상품을 제안하는 렌더링 시스템을 구축했습니다. 복잡한 데이터를 직관적인 UI 요소로 시각화하여 정보 전달력을 극대화했습니다.',
                    image: pengdi3
                }
            ],
            period: '2025.10 - 2025.11 (1개월)',
            myRole: 'Frontend 개발 및 GCP 클라우드 인프라 구축·배포'
        }
    },
    {
        id: 3,
        title: '실로풍경',
        description: '실현과 소통이 담긴 다채로운 상품의 풍경을 제공하며, 사용자에게 안락하고 편안한 온라인 쇼핑 공간을 선사하는 플랫폼.',
        tech: ['JavaScript', 'HTML/CSS', 'JSP', 'MySQL', 'Eclipse'],
        github: 'https://github.com/haerimi/WebMarket',
        demo: 'https://www.youtube.com/watch?v=fhaage5Lp0c',
        image: siloImg,
        details: {
            overview: {
                description: `
### 🚀 개요 
"실로풍경" 프로젝트를 통해 서비스 기획부터 구현까지의 **웹 서비스 전체 생명 주기**를 1인 개발로 완수하며 풀스택 개발자로서의 실무 역량을 쌓았습니다. 

단순히 기능을 구현하는 데 그치지 않고 현대 소비자의 구매 행동을 분석하여 **사용자 중심의 직관적인 UI/UX를 설계**하는 기획적 사고를 길렀으며, 
RBAC(권한 기반 접근 제어) 설계를 직접 수행하며 **시스템 보안과 관리 효율성**을 위한 정교한 로직의 중요성을 체득했습니다. 

특히 카카오페이와 KG이니시스 등 다중 PG사 결제 시스템을 통합 연동하는 과정에서 복잡한 데이터 트랜잭션과 외부 API 처리 능력을 확보했으며, 
결과적으로 기술이 비즈니스 목표와 사용자의 경험을 어떻게 연결하는지 깊이 있게 이해하게 된 소중한 경험이었습니다.
`,
                image: siloImg
            },
            features: [
                {
                    title: '사용자 중심의 쇼핑 경험 설계',
                    description: '현대적인 소비 트렌드를 분석하여 직관적인 UI를 기획하고, 제품 탐색부터 결제까지 끊김 없는 연결감을 제공하는 사용자 중심 아키텍처를 설계했습니다.',
                    image: silo1
                },
                {
                    title: 'RBAC 기반의 보안 및 관리 시스템',
                    description: '권한 기반 접근 제어(Role-Based Access Control)를 도입하여 일반 사용자와 관리자 권한을 명확히 분리했습니다. 역할별 API 접근 통제 로직을 통해 시스템 보안성을 강화하고 관리 효율성을 확보했습니다.',
                    image: silo2
                },
                {
                    title: '다중 PG사 통합 결제 엔진 구축',
                    description: '카카오페이 및 KG이니시스 등 국내 주요 PG사를 다중 연동하여, 사용자에게 유연한 결제 환경을 제공하고 시스템의 확장성을 높였습니다.',
                    image: silo3
                }
            ],
            period: '2024.07 - 2024.08 (1개월)',
            myRole: '1인 개발 (Full-stack) | 기획, UI/UX 설계 및 통합 시스템 구축'
        }
    },
    {
        id: 4,
        title: 'ND-Automation',
        description: '반복적인 데이터 추출 및 관리 업무를 자동화하고, 주요 지표를 슬랙(Slack)으로 실시간 전송하는 데이터 알림 시스템.',
        tech: ['Nest.js', 'TypeORM', 'GCP', 'Slack API'],
        image: codeImg,
        details: {
            overview: {
                description: `
### 🚀 개요 
4주 동안 데이터 **자동화 시스템을 구축**하며 **상황에 맞는 최적의 기술을 선택하는 안목**과 **협업의 중요성**을 깊이 있게 배웠습니다. 
특히 **TypeORM을 활용**할 때 기본 ORM 방식뿐만 아니라 쿼리 빌더와 Raw Query를 **적재적소에 활용하는 법**을 익혔습니다.

**UNION**이나 **GROUP BY**처럼 ORM이나 Query Builder만으로 구현하기 까다로운 복잡한 로직은 직접 SQL 문을 작성하는 **Raw Query 방식**을 병행하여 해결했습니다. 
이를 통해 프레임워크의 제약에 얽매이지 않고 가장 효율적인 DB 접근 방식을 선택하는 유연함을 배웠습니다.

또한, **ExcelJS를 이용한 리포트 생성**과 **Slack API 연동**을 통해 실무에서 즉시 **활용 가능한 자동화 기능을 구현**하는 성취감을 맛보았습니다. 
개발 과정 중 예기치 못한 **코드 유실 사고**를 겪으며, 안정적인 서비스 운영을 위해서는 **철저한 코드 리뷰**와 **팀원 간의 긴밀한 소통**이 필수적이라는 것을 뼈저리게 느꼈습니다. 

결과적으로 이 프로젝트는 **더 간결하고 효율적인 코드를 작성하는 법**과, **함께 일하기 좋은 개발 환경을 구축하는 법**을 동시에 배울 수 있었던 값진 성장의 시간이었습니다.
`,
                image: codeImg
            },
            features: [
                {
                    title: '자동화 리포트 API & Cloud Scheduler 운영',
                    description: '수동으로 수집하던 데이터를 서버가 매일 정해진 시간에 맞춰 자동으로 가공하고, 그 결과를 슬랙 알림으로 실시간 공유하는 시스템을 구축하여 팀원들이 별도의 확인 작업 없이도 정확한 데이터를 즉시 확인할 수 있는 업무 환경을 제공했습니다.',
                    image: auto
                }
            ],
            period: '2025.11 - 2025.12 (1개월)',
            myRole: '업무 프로세스 자동화 및 클라우드 운영 환경 구축'
        }
    },
    {
        id: 5,
        title: 'Book Store',
        description: '프로그래머스 풀스택 과정 수강 중, Node.js와 React를 활용하여 개발한 플랫폼.',
        tech: ['Node.js', 'React', 'TypeScript', 'HTML/CSS', 'MariaDB'],
        github: 'https://github.com/haerimi/Book-store',
        image: bookImg,
        details: {
            overview: {
                description: `
### 🚀 개요 
Node.js와 React를 활용하여 도서 검색부터 장바구니, 주문까지 이어지는 **이커머스의 전체 라이프사이클**을 직접 구현하며 풀스택 개발의 기초를 탄탄히 다졌습니다. 

JWT를 이용한 인증 시스템을 구축하며 **보안이 강화된 회원 관리 로직을 체득**했고, 사용자의 시각적 편의를 위한 다크 모드 테마 기능을 통해 **상태 관리(State Management)의 효율적인 활용법**을 학습했습니다. 

특히 대량의 도서 데이터를 효과적으로 보여주기 위한 검색 및 상세 정보 렌더링 과정을 거치며, 프론트엔드와 백엔드 간의 **데이터 송수신 최적화와 사용자 경험(UX) 개선의 중요성**을 깊이 있게 이해하게 된 프로젝트였습니다.
`,
                image: bookImg
            },
            period: '2024.08 - 2024.11 (3개월)',
            myRole: '도서 커머스 플랫폼 서비스 설계 및 풀스택 개발'
        }
    },
    {
        id: 6,
        title: "The Rabbit's Journey Game",
        description: '진정한 먹방의 즐거움을 찾기 위해 단 하나의 전설적인 식재료를 찾아 떠나는 미식가 캐릭터의 모험기.',
        tech: ['C#', 'Unity'],
        github: 'https://github.com/haerimi/The-Rabbit-s?tab=readme-ov-file',
        demo: 'https://www.youtube.com/watch?v=pSKh4qiiEGE',
        image: gameImg,
        details: {
            overview: {
                description: `
### 🚀 개요 
사용자가 게임 속 캐릭터의 여가생활을 직접 선택하고 경험하는 몰입형 게임을 기획하고 개발했습니다.

NPC와의 상호작용 및 퀘스트의 선후 관계를 설계하며 **복잡한 비즈니스 로직을 체계화하는 상태 머신 설계 능력**을 길렀으며, 
각 스테이지별로 독립적으로 관리되는 아이템 시스템을 통해 **데이터의 분리 및 관리 최적화**를 학습했습니다. 

단순히 재미를 주는 게임을 넘어, **사용자 중심의 콘텐츠 설계**와 **예외 상황 처리**에 대한 프로그래밍 감각을 한 단계 높일 수 있었던 값진 경험이었습니다.

### 🛠️ 주요 기능별 배운 점
순차적 퀘스트 시스템: 퀘스트 간의 선후 관계를 설정하고 조건을 검증하는 로직을 통해, 프로그램이 정해진 순서와 조건에 따라 오차 없이 작동하게 하는 논리적 제어 흐름을 익혔습니다.

스테이지별 독립 아이템 관리: 스테이지 간 데이터가 섞이지 않도록 독립적인 스코어/아이템 시스템을 구축하며, 데이터의 생명 주기(Lifecycle)와 스코프(Scope) 관리의 중요성을 이해했습니다.

상호작용 및 아이템 드랍: 몬스터 처치와 아이템 획득이라는 이벤트를 연결하며 이벤트 기반 프로그래밍의 기초를 다졌고, 보스 몬스터와 일반 몬스터의 드랍 로직을 차별화하며 데이터 등급에 따른 처리 방식을 배웠습니다.
`,
                image: gameImg
            },
            period: '2022.07 (1개월)',
            myRole: '1인 개발 | 프로젝트로 2D 게임 기획 및 제작'
        }
    }
];
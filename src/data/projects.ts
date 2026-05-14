import tripImg from '@/assets/image/trip/trip.png'
import tripWebp from '@/assets/image/trip/trip.webp'
import siloImg from '@/assets/image/silo/silo.png'
import siloWebp from '@/assets/image/silo/silo.webp'
import pengdiImg from '@/assets/image/pengdi/pengdi.png'
import pengdiWebp from '@/assets/image/pengdi/pengdi.webp'
import bookImg from '@/assets/image/book/book.jpg'
import bookWebp from '@/assets/image/book/book.webp'
import gameImg from '@/assets/image/game/game.jpg'
import gameWebp from '@/assets/image/game/game.webp'
import codeImg from '@/assets/image/auto/code.jpg'
import trip1 from '@/assets/image/trip/trip-1.png'
import trip2 from '@/assets/image/trip/trip-2.png'
import trip3 from '@/assets/image/trip/trip-3.png'
import trip4 from '@/assets/image/trip/trip-4.png'
import trip5 from '@/assets/image/trip/trip-5.png'
import trip6 from '@/assets/image/trip/trip-1.webp'
import trip7 from '@/assets/image/trip/trip-2.webp'
import trip8 from '@/assets/image/trip/trip-3.webp'
import trip9 from '@/assets/image/trip/trip-4.webp'
import trip10 from '@/assets/image/trip/trip-5.webp'
import pengdi1 from '@/assets/image/pengdi/pengdi-1.png'
import pengdi2 from '@/assets/image/pengdi/pengdi-2.png'
import pengdi3 from '@/assets/image/pengdi/pengdi-3.png'
import pengdi4 from '@/assets/image/pengdi/pengdi-3.webp'
import silo1 from '@/assets/image/silo/silo-1.png'
import silo2 from '@/assets/image/silo/silo-2.png'
import silo3 from '@/assets/image/silo/silo-3.png'
import silo4 from '@/assets/image/silo/silo-1.webp'
import silo5 from '@/assets/image/silo/silo-2.webp'
import silo6 from '@/assets/image/silo/silo-3.webp'
import auto from '@/assets/image/auto/automation.png'
import autoWebp from '@/assets/image/auto/automation.webp'
import marketDiagram from '@/assets/image/diagram/market.svg'
import marketingDiagram from '@/assets/image/diagram/marketing.svg'
import marketProDiagram from '@/assets/image/diagram/marketProduct.svg'


export interface Diagram {
    title: string;
    description: string;
    image: string;
}

export interface FeatureDetail {
    title: string;
    description: string;
    image: string;
    webpSrc?: string;
}

export interface TechStack {
    title: string;
    description: string;
}

export interface ProjectDetails {
    overview: {
        description: string;
        image?: string;
        webpSrc?: string;
    };
    techStack?: TechStack[];
    features?: FeatureDetail[];
    diagrams?: Diagram[];
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
    webpSrc?: string;
    image?: string;
    details?: ProjectDetails;
}

// 프로젝트 데이터
export const projects: Project[] = [
    {
        id: 1,
        title: 'Trip Together',
        description: '여행 일정을 만들고 공유하며, 다른 사용자와 소통할 수 있는 여행 플래너 플랫폼',
        tech: ['React', 'TypeScript', 'Node.js', 'TypeORM', 'MySQL', 'AWS'],
        github: 'https://github.com/Trip-Togethers',
        demo: 'https://www.youtube.com/watch?v=qPP9TX6dpKo',
        image: tripImg,
        webpSrc: tripWebp,
        details: {
            overview: {
                description: `
### 🚀 개요 
**프로그래머스 풀스택 부트캠프**에서 프론트엔드부터 백엔드, 배포까지 전체 개발 과정을 경험하며 **시스템 전반을 이해**할 수 있었습니다.

**AWS S3를 활용한 이미지 업로드 기능**을 구현하며 클라우드 서비스 연동 방법을 익혔고, 
여행 일정을 시각적으로 보여주는 **UI와 실시간 피드백 기능**을 개발하며 사용자 경험을 개선하는 방법을 배웠습니다.

데이터가 생성되어 서버를 거쳐 화면에 표시되기까지의 흐름을 이해하면서, 
**백엔드와 원활히 협업**하고 **효율적인 상태 관리**를 할 수 있는 개발자로 성장했습니다.
`,
                image: tripImg,
                webpSrc: tripWebp,
            },
            features: [
                {
                    title: '여행 일정 생성 폼',
                    description: '직관적인 입력 UI로 여행 계획을 쉽게 작성하고 저장할 수 있는 기능을 구현했습니다.',
                    image: trip1,
                    webpSrc: trip6,
                },
                {
                    title: '일자별 세부 일정 관리',
                    description: '날짜와 시간 단위로 일정을 관리할 수 있는 상세 플래너를 개발했습니다. 타임라인 형태로 일정을 확인할 수 있습니다.',
                    image: trip2,
                    webpSrc: trip7,
                },
                {
                    title: '지도 기반 장소 저장',
                    description: 'Google Maps API를 연동하여 여행지를 지도에 표시하고, 관심 장소를 북마크로 저장할 수 있는 기능을 구현했습니다.',
                    image: trip3,
                    webpSrc: trip8,
                },
                {
                    title: '캘린더 통합 뷰',
                    description: '모든 일정을 캘린더로 통합하여 시각화했습니다. 날짜별 일정을 한눈에 파악하고 관리할 수 있습니다.',
                    image: trip4,
                    webpSrc: trip9,
                },
                {
                    title: '일정 공유 및 소셜 기능',
                    description: '작성한 일정을 게시글로 공유하고, 댓글과 추천 기능으로 사용자 간 정보를 교류할 수 있습니다.',
                    image: trip5,
                    webpSrc: trip10,
                }
            ],
            period: '2025.01 - 2025.02 (1개월)',
            myRole: '팀장 (6인) | 여행 일정 관리 풀스택 개발 및 API 설계'
        }
    },
    {
        id: 2,
        title: 'Pengdi Chatbot',
        description: '남도마켓의 상품 정보 안내, 대화형 응답, 상품 추천 기능을 제공하는 AI 챗봇 서비스',
        tech: ['React', 'TypeScript', 'Docker', 'HTML/CSS', 'Figma'],
        image: pengdiImg,
        webpSrc: pengdiWebp,
        details: {
            overview: {
                description: `
### 🚀 개요 
2주간 챗봇 서비스의 **프론트엔드 개발부터 GCP 배포**까지 전 과정을 경험하며, **개발과 배포의 전체 흐름**을 이해할 수 있었습니다.

**공통 컴포넌트를 설계**하면서 **확장 가능한 Props 구조**의 중요성을 배웠습니다. 
세밀한 Props 설계를 통해 **재사용성을 높이고 중복 코드를 줄이는 방법**을 익혔습니다.

**Docker 이미지를 생성하고 GCP에 배포**하는 과정에서, 처음 보는 기술도 **차근차근 학습**하면 충분히 구현할 수 있다는 자신감을 얻었습니다. 
배포 후 코드를 되돌아보며, 혼자만 아는 코드가 아닌 **팀원 누구나 이해할 수 있는 코드**를 작성해야 한다는 것을 깨달았습니다.

단순히 기능 구현을 넘어 **배포와 유지보수**를 고민하는 개발자로 성장하는 계기가 되었습니다.
`,
                image: pengdiImg,
                webpSrc: pengdiWebp
            },
            features: [
                {
                    title: '대화형 가이드 UI',
                    description: '버튼 기반의 질의응답 UI를 구현했습니다. 사용자의 선택에 따라 실시간으로 변하는 맞춤형 답변 화면을 제공합니다.',
                    image: pengdi1
                },
                {
                    title: '로딩 애니메이션',
                    description: '대기 시간 동안 5초마다 랜덤 메시지를 표시하는 시스템을 개발했습니다. Styled-components와 CSS Keyframes로 도트 애니메이션을 제작했습니다.',
                    image: pengdi2
                },
                {
                    title: '맞춤형 상품 추천',
                    description: '사용자 응답 데이터를 기반으로 여행 상품을 추천하는 기능을 구현했습니다. 직관적인 UI로 정보를 시각화했습니다.',
                    image: pengdi3,
                    webpSrc: pengdi4
                }
            ],
            period: '2025.10 - 2025.11 (1개월)',
            myRole: '프론트엔드 개발 | React 개발 및 GCP 배포'
        }
    },
    {
        id: 3,
        title: '실로풍경',
        description: '실과 수공예 제품을 판매하는 핸드메이드 커머스 플랫폼',
        tech: ['JavaScript', 'HTML/CSS', 'JSP', 'MySQL', 'Eclipse'],
        github: 'https://github.com/haerimi/WebMarket',
        demo: 'https://www.youtube.com/watch?v=fhaage5Lp0c',
        image: siloImg,
        webpSrc: siloWebp,
        details: {
            overview: {
                description: `
### 🚀 개요 
"실로풍경" 프로젝트를 **기획부터 배포까지 1인 개발**로 진행하며 풀스택 개발 경험을 쌓았습니다.

사용자 구매 패턴을 분석하여 **직관적인 UI/UX를 설계**했고, 
**권한 기반 접근 제어(RBAC)를** 구현하며 역할별 권한 관리 시스템을 구축했습니다.

**카카오페이와 KG이니시스 결제 연동**을 통해 복잡한 외부 API 처리와 결제 프로세스를 경험했으며,
기술이 실제 비즈니스와 사용자 경험에 어떻게 기여하는지 이해할 수 있었습니다.
`,
                image: siloImg,
                webpSrc: siloWebp,
            },
            features: [
                {
                    title: '직관적인 쇼핑 UI',
                    description: '제품 탐색부터 결제까지 자연스럽게 이어지는 쇼핑 경험을 제공하는 UI를 설계하고 구현했습니다.',
                    image: silo1,
                    webpSrc: silo4,
                },
                {
                    title: '권한 기반 접근 제어 (RBAC)',
                    description: '일반 사용자와 관리자 권한을 분리하여 역할별로 접근 가능한 기능과 API를 제한하는 시스템을 구현했습니다.',
                    image: silo2,
                    webpSrc: silo5,
                },
                {
                    title: '다중 PG 결제 연동',
                    description: '카카오페이와 KG이니시스를 연동하여 다양한 결제 수단을 제공하는 시스템을 구축했습니다.',
                    image: silo3,
                    webpSrc: silo6,
                }
            ],
            period: '2024.07 - 2024.08 (1개월)',
            myRole: '1인 개발 (Full-stack) | 기획, UI/UX 설계, 개발'
        }
    },
    {
        id: 4,
        title: 'ND-Automation',
        description: '반복적인 데이터 수집 작업을 자동화하고, 주요 지표를 Slack으로 전송하는 알림 시스템',
        tech: ['Nest.js', 'TypeORM', 'GCP', 'Slack API'],
        image: codeImg,
        details: {
            overview: {
                description: `
### 🚀 개요 
4주간 데이터 **자동화 시스템을 구축**하며 **상황에 맞는 기술 선택**과 **협업의 중요성**을 배웠습니다. 
**TypeORM**을 사용하면서 기본 ORM, 쿼리 빌더, Raw Query를 **상황에 맞게 선택**하는 방법을 익혔습니다.

**UNION**이나 **GROUP BY** 같은 복잡한 쿼리는 **Raw Query로 직접 작성**하여 해결했습니다. 
프레임워크의 한계를 인식하고 더 효율적인 방법을 찾는 경험이었습니다.

**ExcelJS로 리포트를 생성**하고 **Slack API를 연동**하여 실무에서 바로 사용할 수 있는 자동화 기능을 구현했습니다. 
개발 중 **코드 유실 사고**를 겪으며, **코드 리뷰**와 **팀원 간 소통**이 얼마나 중요한지 깨달았습니다.

**더 나은 코드**를 작성하는 법과 **함께 일하기 좋은 개발 문화**를 배운 프로젝트였습니다.
`,
                image: codeImg
            },
            techStack: {
                
            },
            features: [
                {
                    title: '자동화 리포트 시스템',
                    description: '매일 정해진 시간에 데이터를 자동으로 수집하고 가공하여 Slack으로 전송하는 시스템을 구축했습니다. Cloud Scheduler를 활용하여 별도의 수동 작업 없이 팀원들이 실시간으로 데이터를 확인할 수 있습니다.',
                    image: auto,
                    webpSrc: autoWebp
                }
            ],
            diagrams: [
                {
                    title: 'Market Operation (시퀀스 다이어그램)',
                    description: `
#### 📊 주요 기능
KPI 지표 관리, 직거래 간편결제 분석, 디캠프 마일스톤 추적 등 핵심 비즈니스 메트릭을 자동으로 수집하고 전송하는 시스템입니다.

**제공하는 리포트**
· KPI 지표: 도매/소매 가입자 수, 상품 등록 수, 주문 통계
· 직거래 간편결제: 매출, 주문 수, 전환율, 취소율 분석 
· 디캠프 마일스톤: 활성 사용자 접속 통계, 신규 사용자 활성화율

#### 🔄 자동화 프로세스

**주간 리포트 자동 전송**
· **스케줄 트리거**: Google Cloud Scheduler가 매주 월요일 오전 9시 실행
· **인증 및 라우팅**: Guard에서 인증 검증 → Controller → Service로 요청 전달
· **데이터 수집**: 이번 달 1일부터 어제까지 기간 설정 후 20개 이상의 데이터 쿼리 병렬 실행
· **결과 전송**: 수집된 데이터를 포맷팅하여 Slack 채널로 전송

**엑셀 리포트 생성**
· 전체 데이터를 다중 시트 엑셀 파일로 자동 생성
· Slack에 파일 첨부 형태로 전송하여 팀원들이 바로 다운로드 가능
`,
                    image: marketDiagram
                },
                {
                    title: 'Marketing Operation (아키텍처 다이어그램)',
                    description: `
#### 📊 주요 기능
카테고리별 인기 상품을 분석하여 마케팅 인사이트를 제공하는 월간 리포트 시스템입니다.

**제공하는 리포트**
· 판매수량 기준 Top 5 상품
· 판매금액 기준 Top 5 상품
· 10개 카테고리별 각각 집계

#### 🔄 자동화 프로세스

**월간 리포트 자동 생성**
· **스케줄 트리거**: Cloud Scheduler가 매월 1일 오전 9시 실행
· **데이터 수집**: 지난 달 전체 기간(1일~말일) 판매 데이터 조회
· **순위 계산**: 카테고리별로 수량/금액 기준 Top 5 상품 집계
· **리포트 생성**: 카테고리별 워크시트로 구성된 엑셀 파일 생성
· **결과 전송**: Slack 채널에 파일 첨부하여 전송
`,
                    image: marketingDiagram
                },
                {
                    title: 'Market Product Operation (아키텍처 다이어그램)',
                    description: `
#### 📊 주요 기능
상품, 마켓, 주문, 채팅 등 플랫폼 전반의 활동 지표를 통합 분석하는 월간 종합 리포트 시스템입니다.

**제공하는 리포트**
· 상품 통계: 신규 등록/삭제, 카테고리별 분류
· 마켓 통계: 도매/소매 가입 수, 누적 현황, 활성 사용자
· 거래 통계: 주문 금액/건수, 채팅 활동

#### 🔄 자동화 프로세스

**월간 리포트 자동 생성**
· **스케줄 트리거**: Cloud Scheduler가 매월 1일 자동 실행
· **카테고리 조회**: 10개 카테고리 목록을 동적으로 가져옴
· **데이터 수집**: 지난 달 전체 통계를 5개 주요 테이블에서 조회
· **통계 집계**: 전체 통합 리포트 + 카테고리별 상세 분석
· **리포트 생성**: 모든 통계를 하나의 엑셀 파일로 통합
· **결과 전송**: Slack으로 전송하여 팀원들이 바로 확인 가능
                    `,
                    image: marketProDiagram
                }
            ],
            period: '2024.11 - 2024.12 (1개월)',
            myRole: '백엔드 개발 | 자동화 시스템 구축 및 GCP 배포'
        }
    },
    {
        id: 5,
        title: 'Book Store',
        description: 'Node.js와 React로 개발한 도서 쇼핑몰 플랫폼',
        tech: ['Node.js', 'React', 'TypeScript', 'HTML/CSS', 'MariaDB'],
        github: 'https://github.com/haerimi/Book-store',
        image: bookImg,
        webpSrc: bookWebp,
        details: {
            overview: {
                description: `
### 🚀 개요 
Node.js와 React로 도서 검색부터 장바구니, 주문까지 **이커머스 전체 흐름**을 구현하며 풀스택 개발의 기초를 다졌습니다.

**JWT 인증 시스템**을 구축하여 회원 관리 기능을 개발했고, **다크 모드**를 구현하며 전역 상태 관리 방법을 익혔습니다.

대량의 도서 데이터를 처리하는 검색 기능을 개발하며, **프론트엔드와 백엔드 간 데이터 처리**와 **사용자 경험 개선**의 중요성을 배웠습니다.
`,
                image: bookImg,
                webpSrc: bookWebp
            },
            period: '2024.08 - 2024.11 (3개월)',
            myRole: '풀스택 개발 | UI/UX 설계, 프론트엔드/백엔드 개발'
        }
    },
    {
        id: 6,
        title: "The Rabbit's Journey Game",
        description: '전설의 식재료를 찾아 떠나는 미식가 캐릭터의 2D 어드벤처 게임',
        tech: ['C#', 'Unity'],
        github: 'https://github.com/haerimi/The-Rabbit-s?tab=readme-ov-file',
        demo: 'https://www.youtube.com/watch?v=pSKh4qiiEGE',
        image: gameImg,
        webpSrc: gameWebp,
        details: {
            overview: {
                description: `
### 🚀 개요 
사용자가 캐릭터의 여가생활을 선택하고 경험하는 게임을 기획하고 개발했습니다.

NPC와의 상호작용 및 퀘스트의 순서를 설계하며 **상태 머신 구조**를 익혔고, 
스테이지별로 독립적으로 관리되는 아이템 시스템을 통해 **데이터 분리와 관리**를 학습했습니다.

**사용자 중심 설계**와 **예외 상황 처리**를 고민하며 프로그래밍 감각을 키울 수 있었던 경험이었습니다.

### 🛠️ 주요 기능별 배운 점
**순차적 퀘스트 시스템**: 퀘스트 간 선후 관계를 설정하고 조건을 검증하는 로직을 통해, 순서와 조건에 따라 작동하는 제어 흐름을 익혔습니다.

**스테이지별 독립 아이템 관리**: 스테이지 간 데이터가 섞이지 않도록 독립적인 스코어/아이템 시스템을 구축하며, 데이터의 생명 주기와 스코프 관리를 이해했습니다.

**상호작용 및 아이템 드랍**: 몬스터 처치와 아이템 획득 이벤트를 연결하며 이벤트 기반 프로그래밍을 배웠고, 보스와 일반 몬스터의 드랍 로직을 차별화하며 등급별 처리 방식을 익혔습니다.
`,
                image: gameImg,
                webpSrc: gameWebp,
            },
            period: '2022.07 (1개월)',
            myRole: '1인 개발 | 게임 기획 및 개발'
        }
    }
]
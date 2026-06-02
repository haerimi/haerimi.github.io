import tripImg from '@/assets/image/trip/trip.png'
import tripWebp from '@/assets/image/trip/trip.webp'
import siloImg from '@/assets/image/silo/silo.png'
import siloWebp from '@/assets/image/silo/silo.webp'
import pengdiImg from '@/assets/image/pengdi/pengdi.png'
import pengdiWebp from '@/assets/image/pengdi/pengdi.webp'
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
import cluepotImg from '@/assets/image/cluepot/cluepot_main_image.png'
import cluepot1 from '@/assets/image/cluepot/cluepot_preference.png'
import cluepot2 from '@/assets/image/cluepot/cluepot_ready.png'
import cluepot3 from '@/assets/image/cluepot/cluepot_pini_result.png'
import cluepot4 from '@/assets/image/cluepot/cluepot_schedule.png'
import cluepot5 from '@/assets/image/cluepot/cluepot_calendar.png'

export interface FeatureDetail {
    title: string;
    description: string;
    image: string;
    webpSrc?: string;
}

export interface ProjectDetails {
    overview: {
        description: string;
        image?: string;
        webpSrc?: string;
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
여행 일정을 생성·공유하고 다른 사용자와 소통하는 **풀스택 여행 플래너 플랫폼**입니다. 프론트엔드부터 백엔드, 배포까지 전 과정을 담당했습니다.

**AWS S3 이미지 업로드** 파이프라인을 구성하고, Google Maps API와 연동해 여행지를 지도에 시각화했습니다. 캘린더·타임라인 형태의 일정 뷰와 **댓글·추천 소셜 기능**을 구현했습니다.

6인 팀에서 팀장을 맡아 **API 설계를 주도**했으며, TypeORM 기반의 데이터 흐름을 설계해 프론트엔드와의 연동을 이끌었습니다.
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
남도마켓의 상품 안내·추천을 담당하는 **AI 챗봇 서비스의 프론트엔드**를 개발하고 GCP에 배포했습니다.

버튼 기반 질의응답 UI와 로딩 애니메이션을 구현하며, **재사용 가능한 공통 컴포넌트**를 설계했습니다. 세밀한 Props 구조로 중복 코드를 최소화하고 확장성을 확보했습니다.

**Docker 이미지 빌드 후 GCP 배포**까지 직접 진행하며, 개발 환경과 배포 환경의 일관성을 유지했습니다.
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
        title: 'CluePot',
        description: '참가자의 위치·교통수단·분위기 선호를 분석해 모두에게 공정한 모임 장소를 AI가 추천하는 서비스',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'Gemini AI', 'Kakao Maps API'],
        github: 'https://github.com/haerimi/MeetSpot',
        demo: 'https://cluepot.vercel.app',
        image: cluepotImg,
        details: {
            overview: {
                description: `
### 🚀 개요
**"어디서 만날까?"** 를 공정하게 해결하기 위해 만든 AI 모임 장소 추천 서비스입니다.

단순 중간 지점이 아닌 **속도 역가중 중심점**을 직접 설계했습니다. 느린 교통수단(도보 4.5km/h) 이용자는 가중치가 높아져 중심점이 그쪽으로 당겨지고, 결과적으로 모든 참가자의 실제 이동 시간이 균등해집니다.

카카오 장소 검색으로 실존 장소를 찾고, 네이버 블로그 후기에서 **광고·협찬 키워드를 필터링**한 뒤 Gemini AI가 분석해 신뢰할 수 있는 장소를 추천합니다.

Gemini API **503 과부하** 상황에서 지수 백오프(1s→2s→4s) 재시도와, 지오코딩 실패 시 AI가 직접 지역을 추론하는 **fallback**을 설계해 안정적인 추천 파이프라인을 구성했습니다.

### 🤖 AI 활용
**Claude Code · ChatGPT**를 개발 도구로 활용했습니다.
코드 작성, 코드 리뷰, 디버깅·트러블슈팅 전반에서 AI가 초안을 작성하면 직접 검토·수정하며 프로젝트를 완성했습니다.
`,
                image: cluepotImg,
            },
            features: [
                {
                    title: '참가자 선호 입력',
                    description: '출발 지역, 이동 수단(도보·대중교통·자가용·자전거), 이동 거리 선호, 분위기 선호를 수집합니다. 각 선호 데이터는 PINI 엔진의 중심점 계산과 AI 분석에 활용됩니다.',
                    image: cluepot1,
                },
                {
                    title: 'PINI 실행 대기',
                    description: '모든 참가자의 선호가 저장되면 진행 바가 완료되고, 호스트에게 PINI 실행 버튼이 활성화됩니다.',
                    image: cluepot2,
                },
                {
                    title: 'PINI 장소 추천',
                    description: '속도 역가중 중심점으로 공정한 위치를 계산하고, 네이버 블로그 실방문 후기를 광고 필터링 후 Gemini AI가 분석해 장소를 추천합니다. 참가자별 예상 이동 시간과 균등 여부를 함께 표시합니다.',
                    image: cluepot3,
                },
                {
                    title: '일정 확정',
                    description: '추천 장소를 선택하면 날짜와 시간을 입력해 일정을 확정합니다. KST 오프셋을 명시적으로 처리해 시간대 불일치 문제를 해결했습니다.',
                    image: cluepot4,
                },
                {
                    title: '모임 일정 캘린더',
                    description: '내가 참여한 확정 일정을 캘린더로 조회할 수 있습니다. 날짜를 선택하면 해당 일정의 장소와 참가자 정보를 확인할 수 있습니다.',
                    image: cluepot5,
                },
            ],
            period: '2026.05 - 진행 중',
            myRole: '풀스택 1인 개발 | Next.js 풀스택 개발 및 Vercel 배포',
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
반복적인 데이터 수집 작업을 자동화하고 주요 지표를 **Slack으로 자동 전송**하는 리포트 시스템을 구축했습니다.

**TypeORM**에서 기본 ORM, 쿼리 빌더, Raw Query를 상황에 맞게 선택해 사용했습니다. UNION·GROUP BY 등 복잡한 집계는 Raw Query로 직접 작성해 성능을 확보했습니다.

**Cloud Scheduler + ExcelJS + Slack API**를 조합해 매일 정해진 시간에 데이터를 수집·가공·전송하는 자동화 파이프라인을 완성했습니다.
`,
                image: codeImg
            },
            features: [
                {
                    title: '자동화 리포트 시스템',
                    description: '매일 정해진 시간에 데이터를 자동으로 수집하고 가공하여 Slack으로 전송하는 시스템을 구축했습니다. Cloud Scheduler를 활용하여 별도의 수동 작업 없이 팀원들이 실시간으로 데이터를 확인할 수 있습니다.',
                    image: auto,
                    webpSrc: autoWebp
                }
            ],
            period: '2025.11 - 2025.12 (1개월)',
            myRole: '백엔드 개발 | 자동화 시스템 구축 및 GCP 배포'
        }
    },
    {
        id: 5,
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
실과 수공예 제품을 판매하는 **핸드메이드 커머스 플랫폼**을 기획부터 배포까지 1인으로 개발했습니다.

일반 사용자와 관리자를 분리한 **권한 기반 접근 제어(RBAC)** 시스템을 구현해 역할별 API 접근을 제한했습니다.

**카카오페이·KG이니시스** 두 가지 PG사를 연동해 다양한 결제 수단을 제공하고, 결제 성공·실패·취소 흐름을 처리했습니다.
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
            period: '2023.07 - 2023.08 (1개월)',
            myRole: '1인 개발 (Full-stack) | 기획, UI/UX 설계, 개발'
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
전설의 식재료를 찾아 떠나는 미식가 캐릭터의 **2D 어드벤처 게임**을 기획부터 개발까지 1인으로 제작했습니다.

NPC 상호작용과 퀘스트 선후 관계를 **상태 머신(State Machine)** 구조로 설계해 복잡한 게임 흐름을 체계화했습니다.

스테이지 간 데이터가 섞이지 않도록 **독립적인 아이템·스코어 시스템**을 구축하고, 보스와 일반 몬스터의 드랍 로직을 차별화해 등급별 처리를 구현했습니다.
`,
                image: gameImg,
                webpSrc: gameWebp,
            },
            period: '2022.07 (1개월)',
            myRole: '1인 개발 | 게임 기획 및 개발'
        }
    },
    
];

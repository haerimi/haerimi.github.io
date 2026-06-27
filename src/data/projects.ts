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
import silo7 from '@/assets/image/silo/silo-4.png'
import auto from '@/assets/image/auto/automation.png'
import autoWebp from '@/assets/image/auto/automation.webp'
import cluepotImg from '@/assets/image/cluepot/cluepot_main_image.png'
import cluepot1 from '@/assets/image/cluepot/cluepot_preference.png'
import cluepot2 from '@/assets/image/cluepot/cluepot_ready.png'
import cluepot3 from '@/assets/image/cluepot/cluepot_pini_result.png'
import cluepot4 from '@/assets/image/cluepot/cluepot_schedule.png'
import cluepot5 from '@/assets/image/cluepot/cluepot_calendar.png'
import game1 from '@/assets/image/game/game-1.png'
import game2 from '@/assets/image/game/game-2.png'
import game4 from '@/assets/image/game/game-4.png'
import game5 from '@/assets/image/game/game-5.png'

export interface FeatureDetail {
    title: string;
    description: string;
    image: string;
    webpSrc?: string;
}

export interface TroubleshootingItem {
    title: string;
    symptom: string;
    approach: string;
    cause: string;
    solution: string;
    result: string;
    learned: string;
    code?: string;
}

export interface ProjectDetails {
    overview: {
        description: string;
        image?: string;
        webpSrc?: string;
    };
    features?: FeatureDetail[];
    troubleshooting?: TroubleshootingItem[];
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
        tech: ['React', 'TypeScript', 'Node.js', 'Express', 'TypeORM', 'MySQL', 'AWS S3'],
        github: 'https://github.com/Trip-Togethers',
        demo: 'https://www.youtube.com/watch?v=qPP9TX6dpKo',
        image: tripImg,
        webpSrc: tripWebp,
        details: {
            overview: {
                description: `
### 🚀 개요
여행 일정을 생성·공유하고 다른 사용자와 소통하는 풀스택 여행 플래너 플랫폼입니다. 

6인 팀에서 백엔드 팀장을 맡아 **API 설계를 주도**했으며, 
**여행 일정 CRUD**, AWS S3 이미지 업로드를 담당했습니다. 

캘린더·타임라인 형태의 일정 뷰와 댓글·추천 소셜 기능과 Google Maps API 연동을 팀원들과 함께 구현했고, 
프론트엔드 일정이 지연되는 시점에 **여행 상세일정 UI 작업**을 직접 맡아 진행했습니다.
`,
                image: tripImg,
                webpSrc: tripWebp,
            },
            features: [
                {
                    title: '여행 일정 생성 폼',
                    description: '여행 제목·날짜·배경 이미지를 입력해 일정을 생성하는 폼을 구현했습니다.',
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
            troubleshooting: [
                {
                    title: '게시글 전체가 동일한 댓글 목록을 공유하는 버그',
                    symptom: '특정 게시글에 달린 댓글이 다른 게시글에서도 동일하게 표시되었습니다. 어떤 글을 열어도 댓글 내용이 같았습니다.',
                    approach: '처음에는 프론트엔드에서 댓글 상태를 게시글 전환 시 초기화하지 않는 문제라고 판단했습니다. 상태 초기화 로직을 점검했지만 이상이 없었습니다. API 응답을 직접 확인하니 서버가 postId와 무관하게 댓글 전체를 반환하고 있었고, 원인이 백엔드에 있다는 것을 파악했습니다.',
                    cause: 'Comments 엔티티에 @ManyToOne과 @JoinColumn으로 관계는 선언했지만, postId를 @Column()으로 별도 속성으로 선언하지 않았습니다. TypeORM에서 find({ where: { postId } })로 필터링하려면 해당 필드가 @Column() 데코레이터로 명시되어 있어야 합니다. 선언이 없으면 find({ where: { postId } })에서 postId를 조회 조건으로 인식하지 못해 댓글 전체가 반환되었습니다.',
                    solution: 'Comments 엔티티에 @Column() postId!: number를 추가해 find({ where: { postId } })에서 postId를 정상적으로 조회 조건으로 사용할 수 있도록 수정했습니다.',
                    result: '각 게시글이 자신에게 달린 댓글만 정확히 표시되었습니다.',
                    learned: 'TypeORM에서 관계 선언과 컬럼 선언은 서로 다른 역할을 합니다. ORM이 자동으로 처리해 줄 것이라고 가정하기보다, 실제 쿼리가 어떻게 생성되는지 확인하는 습관이 중요하다는 점을 배웠습니다.',
                    code: `// Before — postId 컬럼 선언 없음
@ManyToOne(() => Posts, (post) => post.id, { onDelete: 'CASCADE' })
@JoinColumn({ name: 'post_id' })
post: Posts;

// After — @Column()으로 명시적 선언 추가
@Column()
postId!: number;

@ManyToOne(() => Posts, (post) => post.id, { onDelete: 'CASCADE' })
@JoinColumn({ name: 'post_id' })
post: Posts;`,
                },
                {
                    title: '댓글 삭제 시 404 에러 — 매개변수 순서 오류',
                    symptom: '댓글 삭제 버튼을 누르면 404 에러가 반환되었습니다. 동일한 엔드포인트를 Postman으로 직접 호출하면 정상 동작했습니다.',
                    approach: 'API 경로와 인증 토큰에 문제가 없는지 먼저 확인했습니다. 요청 URL과 헤더는 정확했습니다. 이후 실제 함수 호출부를 열어 각 매개변수에 어떤 값이 전달되는지 하나씩 출력해 봤습니다.',
                    cause: '서비스 함수 시그니처는 deleteComment(commentId, postId, userId) 순서였는데, 컨트롤러에서 deleteComment(commentId, userId, postId)로 순서가 바뀌어 있었습니다. 잘못된 값이 postId 매개변수로 전달되면서 조회 조건과 일치하는 댓글을 찾지 못했습니다.',
                    solution: '컨트롤러 호출부의 매개변수 순서를 서비스 시그니처에 맞게 수정했습니다.',
                    result: '댓글 삭제가 정상적으로 동작했습니다.',
                    learned: 'Postman과 실제 코드는 각각 다른 값을 전달하기 때문에, 테스트 통과가 구현의 정확성을 보장하지는 않습니다. 매개변수가 많은 함수는 객체를 전달하는 방식이 호출 순서 실수를 줄이고 코드의 가독성도 높일 수 있다는 점을 배웠습니다.',
                    code: `// Before
CommunityServices.deleteComment(commentId, userId, postId)

// After
CommunityServices.deleteComment(commentId, postId, userId)`,
                },
                {
                    title: 'TypeScript Express 타입 확장 — req.user 타입 에러',
                    symptom: 'JWT 인증 미들웨어에서 req.user에 사용자 정보를 담았지만, 이후 라우트에서 req.user에 접근할 때마다 TypeScript가 "해당 속성이 존재하지 않는다"는 에러를 냈습니다.',
                    approach: 'req.user를 인식시키려면 Express의 타입을 확장해야 한다는 것을 알고, declare global { namespace Express { interface Request } } 방식으로 선언했습니다. 그런데 에러가 사라지지 않았습니다. 선언 파일 위치와 tsconfig의 포함 여부를 차례로 점검했습니다.',
                    cause: 'declare global은 전역 스코프를 확장하는 방식으로, Express 모듈 내부의 타입에는 영향을 주지 못했습니다. Express의 타입은 모듈을 통해 관리되기 때문에 declare global만으로는 Request 타입이 확장되지 않았습니다.',
                    solution: 'declare module "express" { interface Request { user?: User } } 방식으로 변경해 Express 모듈을 직접 증강했습니다.',
                    result: 'req.user의 타입이 정상적으로 인식되었고, 이후 모든 라우트에서 별도의 타입 단언 없이 사용할 수 있었습니다.',
                    learned: 'TypeScript에서 전역 선언과 모듈 증강(module augmentation)은 다르게 동작합니다. 외부 라이브러리의 타입을 확장할 때는 그 라이브러리가 어떤 방식으로 타입을 내보내는지 먼저 파악하고, 그에 맞는 선언 방식을 선택해야 합니다.',
                    code: `// Before
declare global {
  namespace Express {
    interface Request { user?: User }
  }
}

// After
declare module 'express' {
  interface Request { user?: User }
}`,
                },
            ],
            period: '2025.01 - 2025.02 (1개월)',
            myRole: '팀장 (6인) | 여행 일정 관리 풀스택 개발 및 API 설계'
        }
    },
    {
        id: 2,
        title: 'Pengdi Chatbot',
        description: '남도마켓의 상품 정보 안내, 대화형 응답, 상품 추천 기능을 제공하는 AI 챗봇 서비스 프론트엔드 개발',
        tech: ['React', 'TypeScript', 'Docker', 'HTML/CSS', 'GCP', 'Styled-components'],
        image: pengdiImg,
        webpSrc: pengdiWebp,
        details: {
            overview: {
                description: `
### 🚀 개요
인턴 기간 중 개발한 남도마켓의 상품 안내·추천을 담당하는 
AI 챗봇 서비스의 프론트엔드를 개발하고 GCP에 배포했습니다.

초기 가이드 버튼 UI를 구현하고, 발신자(사용자/AI)에 따라 말풍선 위치가 달라지는 
**공통 메시지 컴포넌트**를 설계해 사용자/AI 말풍선을 하나의 컴포넌트로 처리했습니다. 

**Docker 이미지 빌드 후 GCP 배포**까지 직접 진행했습니다.
`,
                image: pengdiImg,
                webpSrc: pengdiWebp
            },
            features: [
                {
                    title: '대화형 가이드 UI',
                    description: '챗봇 시작 시 안내 버튼을 선택하면 해당 주제의 답변을 제공하는 초기 가이드 UI를 구현했습니다.',
                    image: pengdi1
                },
                {
                    title: '로딩 애니메이션',
                    description: '대기 시간 동안 5초마다 랜덤 메시지를 표시하는 로딩 화면을 구현했습니다. Styled-components와 CSS Keyframes로 도트 애니메이션을 제작했습니다.',
                    image: pengdi2
                },
                {
                    title: '맞춤형 상품 추천',
                    description: '사용자 요청에 따라 상품을 추천하고 캐러셀 형태로 보여주는 기능을 구현했습니다.',
                    image: pengdi3,
                    webpSrc: pengdi4
                }
            ],
            troubleshooting: [
                {
                    title: '로딩 메시지 타이머가 경과 시간과 무관하게 항상 첫 번째 그룹만 출력되는 버그',
                    symptom: '5초마다 로딩 메시지를 그룹별로 바꾸도록 구현했는데, 시간이 지나도 항상 GROUP_1 메시지만 출력되었습니다.',
                    approach: '그룹 분기 로직 자체는 문제가 없었습니다. setInterval 내부에서 경과 시간 계산에 사용하는 startTime 값을 출력해보니, 타이머가 돌아가는 동안 항상 최초 시작 시점의 값이 찍혔습니다. 시간이 흘러도 값이 갱신되지 않았습니다.',
                    cause: 'startTime을 일반 변수로 선언했기 때문에, setInterval 콜백이 생성된 시점의 startTime을 클로저로 캡처해 이후에도 값이 갱신되지 않았습니다.',
                    solution: 'startTime과 타이머 ID를 useRef로 관리하도록 변경했습니다. useRef는 리렌더링과 무관하게 최신 값을 유지하기 때문에 setInterval 내부에서도 정확한 시작 시간을 참조할 수 있었습니다. 또한 API 응답 시점과 메시지 교체 시점 각각에서 stopTimer()를 호출해, 응답 속도와 관계없이 타이머가 메시지를 덮어쓰지 않도록 했습니다.',
                    result: '경과 시간에 따라 GROUP_1부터 GROUP_6까지 순서대로 메시지가 전환되었습니다.',
                    learned: 'setInterval 콜백은 생성 시점의 변수를 클로저로 캡처하기 때문에, 시간이 지나도 갱신이 필요한 값은 useRef로 관리해야 합니다. 비동기 타이머 환경에서는 중단 처리를 방어적으로 이중으로 작성하는 것이 안전하다는 점을 배웠습니다.',
                    code: `const intervalRef = useRef<NodeJS.Timeout | null>(null);
const startTimeRef = useRef<number>(0);

const startTimer = (id: number) => {
  startTimeRef.current = Date.now();

  intervalRef.current = setInterval(() => {
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    updateLoadingMessage(id, getGroupKey(elapsed));
  }, 5000);
};

const stopTimer = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
};`,
                },
                {
                    title: '첫 화면 진입 시 봇 메시지 상단이 잘려서 보이는 문제',
                    symptom: '채팅 페이지에 진입하면 봇의 첫 인사 메시지가 화면 위쪽이 잘린 채로 표시되었습니다. 스크롤을 올려야 전체 메시지를 볼 수 있었습니다.',
                    approach: '메시지가 추가될 때마다 스크롤을 아래로 이동시키는 useEffect가 있었습니다. 첫 진입 시에도 이 로직이 실행되는지 확인하니, 봇의 초기 메시지가 추가되는 시점에도 스크롤이 하단으로 이동하고 있었습니다.',
                    cause: '메시지가 변경될 때마다 실행되는 스크롤 이동 로직이 초기 렌더링 시에도 동일하게 실행되고 있었습니다. 봇의 초기 메시지가 추가되는 시점에도 스크롤이 하단으로 이동해 첫 메시지 상단이 화면 밖으로 밀려났습니다.',
                    solution: '스크롤 이동 조건을 messages.length > 1일 때만 실행되도록 수정했습니다. 첫 메시지는 스크롤을 내리지 않고 상단에서 그대로 보이도록 처리했습니다.',
                    result: '첫 진입 시 봇의 인사 메시지가 상단부터 온전히 표시되었고, 이후 메시지 추가 시에는 정상적으로 스크롤이 내려갔습니다.',
                    learned: 'useEffect로 스크롤을 제어할 때는 초기 렌더링과 이후 메시지 추가를 구분해야 합니다. 렌더링 시점에 따라 동일한 로직이 다르게 동작할 수 있고, 조건 없이 적용하면 초기 상태에서 의도치 않은 동작이 생길 수 있다는 점을 배웠습니다.',
                    code: `useEffect(() => {
  const currentCount = messages.length;
  if (chatRef.current && currentCount > 1) {
    const container = chatRef.current;
    if (container.scrollHeight > container.clientHeight) {
      container.scrollTop = container.scrollHeight;
    }
  }
}, [messages]);`,
                },
                {
                    title: '배포 후 챗봇 API 응답이 JSON이 아닌 HTML로 반환되는 문제',
                    symptom: 'GCP Cloud Run에 배포한 뒤 채팅을 시도하면 서버 응답이 JSON 대신 HTML 문자열로 반환되었습니다. 챗봇이 전혀 동작하지 않았습니다.',
                    approach: 'API 요청 URL을 확인하니 백엔드 서버 주소가 아닌 프론트엔드 배포 URL로 요청이 가고 있었습니다. 환경변수 설정을 먼저 점검했고, 값 자체는 올바르게 설정되어 있음을 확인했습니다. 코드와 환경변수 모두 정상임을 확인한 뒤, 실제 배포된 빌드가 어느 브랜치를 기준으로 생성됐는지 확인했습니다.',
                    cause: 'dev 브랜치에서 수정한 API URL 코드를 main 브랜치에 머지하지 않은 상태로 배포했습니다. Cloud Run은 main 기준으로 빌드됐기 때문에 수정 이전 코드가 그대로 배포되어 있었습니다.',
                    solution: 'dev 브랜치를 main으로 머지한 뒤 재배포했습니다.',
                    result: '챗봇 API가 정상적으로 JSON 응답을 반환했고 채팅이 정상 동작했습니다.',
                    learned: '배포 문제는 코드 자체보다 "어떤 브랜치가 실제로 배포되었는지"부터 확인해야 한다는 점을 배웠습니다. 설정이나 환경변수가 올바르게 보이더라도, 실제 배포에 사용된 브랜치가 다르면 변경 사항이 반영되지 않을 수 있다는 점을 배웠습니다.',
                },
            ],
            period: '2025.10 - 2025.11 (1개월)',
            myRole: '프론트엔드 개발 | React 개발 및 GCP 배포'
        }
    },
    {
        id: 3,
        title: 'CluePot',
        description: '참가자의 위치·교통수단·분위기 선호를 분석해 모두에게 공정한 모임 장소를 AI가 추천하는 서비스',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'Gemini AI', 'Kakao Maps API', 'React Native'],
        github: 'https://github.com/haerimi/Cluepot.git',
        demo: 'https://cluepot.vercel.app',
        image: cluepotImg,
        details: {
            overview: {
                description: `
### 🚀 개요
"**어디서 만날까?**"를 해결하기 위해 만든 AI 모임 장소 추천 서비스입니다. 

참가자들의 출발지·교통수단·분위기 선호를 수집해 **이동 부담이 균등한 중간 지점**을 계산하고, 
카카오맵 실존 장소와 네이버 블로그 후기(광고·협찬 키워드 필터링 포함)를 기반으로 **Gemini AI**가 장소를 분석해 추천합니다. 

Next.js App Router 기반 풀스택 개발을 단독으로 진행했으며, 
Zustand 전역 상태 관리, Kakao Maps SDK 연동, Gemini AI 연동을 직접 구현했습니다.
`,
                image: cluepotImg,
            },
            features: [
                {
                    title: '참가자 선호 입력',
                    description: '출발 지역, 이동 수단(도보·대중교통·자가용·자전거), 이동 거리 선호, 분위기 선호를 수집합니다. 각 선호 데이터는 중심점 계산과 AI 분석에 활용됩니다.',
                    image: cluepot1,
                },
                {
                    title: 'PINI 실행 대기',
                    description: '모든 참가자의 선호가 저장되면 진행 바가 완료되고 호스트에게 PINI 실행 버튼이 활성화됩니다.',
                    image: cluepot2,
                },
                {
                    title: 'PINI 장소 추천',
                    description: '이동 부담이 균등한 중심점을 계산하고, 네이버 블로그 실방문 후기를 광고 필터링 후 Gemini AI가 분석해 장소를 추천합니다. 참가자별 예상 이동 시간을 함께 표시합니다.',
                    image: cluepot3,
                },
                {
                    title: '일정 확정',
                    description: '추천 장소를 선택하면 날짜와 시간을 입력해 일정을 확정합니다.',
                    image: cluepot4,
                },
                {
                    title: '모임 일정 캘린더',
                    description: '내가 참여한 확정 일정을 캘린더로 조회할 수 있습니다. 날짜를 선택하면 해당 일정의 장소와 참가자 정보를 확인할 수 있습니다.',
                    image: cluepot5,
                },
            ],
            troubleshooting: [
                {
                    title: 'React 상태 관리 최적화 — PINI 로딩 메시지 깜빡임',
                    symptom: 'PINI 분석 단계가 바뀔 때 로딩 메시지가 한 프레임 깜빡이면서 이전 메시지가 잠깐 보였습니다.',
                    approach: '처음엔 CSS transition 문제로 의심했습니다. 재현해보니 텍스트가 바뀌는 게 아니라 이전 값이 한 프레임 그대로 남는 패턴이었습니다. React DevTools로 렌더 순서를 확인하니 화면이 먼저 렌더링된 뒤 `useEffect`가 실행되어 메시지 state를 갱신하고 있었습니다.',
                    cause: '`useEffect`는 렌더링 이후에 실행되기 때문에, step이 변경되면 이전 메시지가 한 프레임 먼저 렌더링된 뒤 새로운 메시지로 갱신됐습니다.',
                    solution: '`useState`를 제거하고 현재 step을 기준으로 메시지를 계산하는 방식(derived value: 별도 상태 없이 현재 값으로 계산하는 방식)으로 변경했습니다. 불필요한 상태를 제거해 렌더 결과와 데이터가 항상 일치하도록 만들 수 있어 가장 적절한 방법이라고 판단했습니다.',
                    result: '수정 후 단계 전환 시 이전 메시지가 노출되지 않았고 깜빡임도 사라졌습니다.',
                    learned: '화면에서 계산할 수 있는 값이라면 별도 상태로 관리하지 않는 것이 더 단순하고 안정적인 구조라는 점을 배웠습니다.',
                    code: `// Before
const [message, setMessage] = useState('')
useEffect(() => { setMessage(getMsg(step)) }, [step])

// After
const message = getMsg(step)`,
                },
                {
                    title: 'Supabase 인증 타이밍 문제 — Storage 400 에러',
                    symptom: '이미지 업로드 요청이 400으로 떨어졌습니다. Storage 정책에는 문제가 없었지만 업로드 요청이 인증되지 않은 상태로 전달됐습니다.',
                    approach: '로그인 상태는 유지되고 있었지만 업로드 요청에만 인증 헤더(Authorization)가 포함되지 않아 Supabase 클라이언트 초기화 과정을 확인했습니다.',
                    cause: '`createBrowserClient`는 브라우저에 저장된 세션을 비동기로 복원합니다. 업로드 요청이 세션 복원보다 먼저 실행되면서 로그인 정보가 Authorization 헤더에 포함되지 않았습니다.',
                    solution: '`getUser()`를 먼저 호출해 로그인 정보가 복원된 이후 업로드 요청이 실행되도록 순서를 변경했습니다. 인증 로직을 우회하기보다 세션 초기화 순서를 보장하는 방향이 라이브러리 동작 방식에도 맞는 해결책이라고 판단했습니다.',
                    result: '이후 업로드 요청에 Authorization 헤더에 JWT가 정상적으로 포함되면서 400 오류 없이 업로드가 완료됐습니다.',
                    learned: '"로그인됐다"와 "세션이 요청에 실렸다"는 다른 문제였습니다. 라이브러리의 초기화 타이밍을 이해하지 못하면 인증 문제의 원인을 잘못 판단할 수 있다는 점을 배웠습니다.',
                    code: `await supabase.auth.getUser()
await supabase.storage.from('bucket').upload(path, file)`,
                },
                {
                    title: 'iOS Safari 브라우저 동작 대응 — Input 자동 확대',
                    symptom: '모바일에서 입력창을 탭하면 화면 전체가 확대됐습니다.',
                    approach: '처음엔 viewport 설정 문제로 봤습니다. `user-scalable=no`로 해결할 수 있었지만 접근성을 저해할 수 있어 적절하지 않았습니다. iOS Safari 동작 스펙을 찾아보니 font-size 조건이 있었습니다.',
                    cause: 'iOS Safari는 `font-size`가 16px 미만인 input에 포커스하면 가독성을 위해 자동으로 줌인합니다. 입력 필드들이 14px였습니다.',
                    solution: '입력 요소의 기본 `font-size`를 16px 이상으로 조정해 iOS Safari의 자동 확대 조건을 만족하도록 수정했습니다. viewport 설정을 변경하면 접근성을 해칠 수 있어 브라우저 권장 방식인 폰트 크기 조정을 선택했습니다.',
                    result: '이후 iOS Safari에서도 화면 확대 없이 자연스럽게 입력할 수 있었습니다.',
                    learned: '빠르게 문제를 해결하는 것보다 브라우저의 동작 원인을 이해하고 접근성을 함께 고려해 해결하는 것이 더 중요하다는 점을 배웠습니다.',
                    code: `/* globals.css */
input, textarea, select {
  font-size: 16px;
}`,
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
        tech: ['Nest.js', 'TypeORM', 'GCP', 'Slack API', 'ExcelJS'],
        image: codeImg,
        details: {
            overview: {
                description: `
### 🚀 
개요반복적인 데이터 수집 작업을 자동화하고 주요 지표를 **Slack**으로 자동 전송하는 리포트 시스템입니다.

일별 판매 지표는 Slack 메시지로, 월별 집계 데이터는 **ExcelJS**로 가공한 엑셀 파일로 전송되도록 구분해 구현했습니다.

판매 상품·카테고리 등 복잡한 집계는 UNION·GROUP BY를 **쿼리 빌더**로 직접 작성해 처리했습니다.

**Cloud Scheduler**로 매일 정해진 시간에 자동 실행되도록 설정했습니다.
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
            troubleshooting: [
                {
                    title: 'TypeORM 쿼리 빌더에서 Simple CASE 문법이 작동하지 않는 문제',
                    symptom: '`cancel_reason` 컬럼에 Simple CASE 구문(`CASE o.cancel_reason WHEN \'CHANGE_OF_MIND\' THEN ...`)을 작성했을 때 `Unknown column \'o.cancelReason\' in \'field list\'` 오류가 발생했습니다.',
                    approach: '엔티티에 `@Column({ name: \'cancel_reason\' })`으로 DB 컬럼명을 매핑해 두었기 때문에 처음에는 엔티티 설정 문제로 접근하여 컬럼 정의를 재확인했습니다. 이후 TypeORM이 실제로 생성하는 SQL을 로그로 출력해 문제 위치를 파악했습니다.',
                    cause: '해당 CASE 구문에서는 ORM의 컬럼 매핑이 기대한 방식으로 적용되지 않아, TypeScript 프로퍼티명 `cancelReason`이 그대로 SQL에 삽입되면서 실제 DB 컬럼명 `cancel_reason`과 불일치가 발생했습니다.',
                    solution: 'Simple CASE 구문 대신 Searched CASE 구문(`CASE WHEN o.cancel_reason = \'CHANGE_OF_MIND\' THEN ...`)으로 변경했습니다. 각 `WHEN` 절에서 조건식으로 직접 비교하는 방식이라 ORM의 컬럼명 매핑에 의존하지 않습니다.',
                    result: '오류가 사라지고 취소 사유가 정상적으로 분류되어 조회되었습니다.',
                    learned: 'ORM이 생성하는 SQL을 로그로 직접 확인하는 습관이 중요하다는 것을 배웠습니다. ORM 추상화에 의존하기보다 실제 SQL을 기준으로 동작을 검증해야 예상치 못한 매핑 불일치를 빠르게 찾을 수 있습니다.',
                    code: `// Simple CASE — ORM 컬럼 매핑이 적용되지 않아 오류 발생
\`CASE o.cancel_reason
  WHEN 'CHANGE_OF_MIND' THEN '단순 변심'
  WHEN 'OUT_OF_STOCK' THEN '판매자 품절 안내'
  ...
END\`

// Searched CASE — 조건식으로 직접 비교하여 정상 동작
\`CASE
  WHEN o.cancel_reason = 'CHANGE_OF_MIND' THEN '단순 변심'
  WHEN o.cancel_reason = 'OUT_OF_STOCK' THEN '판매자 품절 안내'
  ...
END\``
                },
                {
                    title: 'GCP Cloud Run 배포 후 Slack API 인증 실패(not_authed) 문제',
                    symptom: '로컬에서는 Slack 파일 업로드가 정상 작동했는데, Cloud Run 배포 후 `Error: An API error occurred: not_authed` 오류가 발생하며 전송이 실패했습니다.',
                    approach: '봇 토큰과 채널 ID는 GCP 콘솔 트리거에 환경변수로 등록되어 있었기 때문에 처음에는 원인을 찾기 어려웠습니다. Cloud Run 로그를 통해 런타임 환경에서 해당 환경변수가 주입되지 않은 상태임을 확인했습니다.',
                    cause: 'GCP Cloud Build 트리거에 환경변수를 등록해도, `cloudbuild.yaml`의 `gcloud run deploy` 명령에서 `--set-env-vars`로 명시적으로 전달하지 않으면 서버(Cloud Run)에는 값이 주입되지 않습니다. Cloud Build 트리거에 등록한 변수는 빌드 과정에서만 사용되며, Cloud Run이 실행될 때는 자동으로 전달되지 않습니다.',
                    solution: '`cloudbuild.yaml`의 배포 명령에 `--set-env-vars` 옵션을 추가하여 빌드 타임 변수가 런타임 환경변수로 전달되도록 수정했습니다.',
                    result: 'Cloud Run 서버가 봇 토큰을 정상적으로 읽어 인증에 성공하고 Slack으로 파일이 전송되었습니다.',
                    learned: 'CI/CD 환경에서는 빌드 설정과 런타임 환경변수가 분리되어 있어, 배포 단계별로 변수 전달 흐름을 반드시 확인해야 한다는 점을 배웠습니다. 배포 후 예상치 못한 인증 오류가 발생하면 코드보다 환경변수 주입 흐름을 먼저 점검하는 것이 효율적입니다.',
                    code: `# cloudbuild.yaml 수정 전 — 환경변수가 서버에 전달되지 않음
- name: 'gcr.io/cloud-builders/gcloud'
  args: ['run', 'deploy', 'my-service', '--image', 'gcr.io/$PROJECT_ID/my-service']

# cloudbuild.yaml 수정 후 — --set-env-vars로 런타임에 명시적 전달
- name: 'gcr.io/cloud-builders/gcloud'
  args:
    - 'run'
    - 'deploy'
    - 'my-service'
    - '--image'
    - 'gcr.io/$PROJECT_ID/my-service'
    - '--set-env-vars'
    - 'SLACK_BOT_TOKEN=$_SLACK_BOT_TOKEN,SLACK_CHANNEL_ID=$_SLACK_CHANNEL_ID'`
                },
                {
                    title: '배포 후 Slack Webhook URL이 404를 반환하는 문제',
                    symptom: 'Cloud Run 배포 후 Slack 메시지 전송 시 `AxiosError: Request failed with status code 404` 오류가 발생하며 전송이 실패했습니다.',
                    approach: '코드 자체는 로컬에서 정상 작동했기 때문에 환경변수가 서버에 올바르게 전달되는지 먼저 확인했습니다. 환경변수 값은 정상적으로 주입되고 있음을 확인했고, 이후 코드 문제가 아닌 URL 자체의 문제인지 확인하기 위해 `curl`로 Webhook URL에 직접 요청을 보냈습니다.',
                    cause: '환경변수에 등록된 Webhook URL이 Slack 측에서 무효화된 상태였습니다. Slack 앱 설정이 변경되거나 재생성되면 기존 URL은 무효화될 수 있는데, 이를 확인하지 않고 그대로 사용하고 있었습니다.',
                    solution: '`curl`로 응답(`ok` / `no_service`)을 확인하여 URL이 유효하지 않음을 검증한 뒤, Slack 앱 설정에서 Webhook URL을 재발급받아 환경변수를 갱신했습니다.',
                    result: '유효한 URL로 갱신 후 메시지가 Slack 채널에 정상적으로 전송되었습니다.',
                    learned: '외부 API 연동 시 "코드 정상 동작"과 "외부 설정 유효성"을 반드시 분리해서 검증해야 한다는 점을 배웠습니다. `curl`로 엔드포인트를 직접 호출하는 방식은 코드와 무관하게 API 상태를 빠르게 확인할 수 있는 효과적인 방법입니다.',
                    code: `# Webhook URL 유효성 검증 — ok: 유효 / no_service: 무효
curl -X POST -H 'Content-type: application/json' \\
  --data '{"text":"test"}' \\
  https://hooks.slack.com/services/XXXX/XXXX/XXXX

# 응답 예시
ok        # 정상
no_service  # URL 무효화됨 → 재발급 필요`
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
        tech: ['JavaScript', 'HTML/CSS', 'JSP', 'MySQL'],
        github: 'https://github.com/haerimi/WebMarket',
        demo: 'https://www.youtube.com/watch?v=fhaage5Lp0c',
        image: siloImg,
        webpSrc: siloWebp,
        details: {
            overview: {
                description: `
### 🚀 개요
실과 수공예 제품을 판매하는 **핸드메이드 커머스 플랫폼**을 기획부터 구현까지 1인으로 개발했습니다.

일반 사용자와 관리자를 분리한 **권한 기반 접근 제어(RBAC)** 시스템을 구현해 역할별 API 접근을 제한했습니다.

**카카오페이·KG이니시스** 두 가지 PG사를 연동해 다양한 결제 수단을 제공하고, 결제 성공·실패·취소 흐름을 처리했습니다.
`,
                image: siloImg,
                webpSrc: siloWebp,
            },
            features: [
                {
                    title: '상품 목록 및 상세 페이지',
                    description: '상품 목록에서 가격·설명·리뷰를 확인하고 구매 결정을 내릴 수 있는 상세 페이지를 구현했습니다.',
                    image: silo7,
                },
                {
                    title: '권한 기반 접근 제어 (RBAC)',
                    description: '일반 사용자와 관리자 권한을 분리하여 역할별로 접근 가능한 기능과 API를 제한하는 시스템을 구현했습니다.',
                    image: silo2,
                    webpSrc: silo5,
                },
                {
                    title: '장바구니 및 결제',
                    description: '상품을 장바구니에 담고 카카오페이·KG이니시스를 통해 결제까지 이어지는 쇼핑 플로우를 구현했습니다.',
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
            features: [
                {
                    title: '게임플레이',
                    description: '캐릭터를 이동하며 잡몹을 처치하고 아이템을 수집하는 기본 게임플레이를 구현했습니다. 당근 등 아이템 획득 시 수량이 실시간으로 갱신됩니다.',
                    image: game1,
                },
                {
                    title: 'NPC 대화 시스템',
                    description: 'NPC와 순차적으로 대화가 진행되며, 순서를 어기면 대화가 차단되도록 구현했습니다. 스토리 진행에 따라 대화창이 표시됩니다.',
                    image: game2,
                },
                {
                    title: '퀘스트 시스템',
                    description: '특정 행동을 수행하면 퀘스트 상태가 갱신되는 시스템을 구현했습니다. 퀘스트 선후 관계를 상태 머신으로 설계해 복잡한 진행 흐름을 체계화했습니다.',
                    image: game4,
                },
                {
                    title: '보스 전투',
                    description: '보스와 일반 몬스터의 드랍 로직을 차별화하고, 보스 HP 바를 별도로 표시해 전투 긴장감을 구현했습니다.',
                    image: game5,
                },
            ],
            period: '2022.07 (1개월)',
            myRole: '1인 개발 | 게임 기획 및 개발'
        }
    },

];

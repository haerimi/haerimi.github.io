# 박해림 포트폴리오

> 풀스택 개발자 박해림의 개인 포트폴리오 웹사이트

🔗 **Live** → [haerimi.github.io](https://haerimi.github.io)

<br/>

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| UI Components | Headless UI, Heroicons, Lucide React |
| Markdown | React Markdown |
| Build | CRACO |
| Deploy | GitHub Pages |

<br/>

## 주요 기능

- **프로젝트 카드** — 호버 시 줌인 효과, 카드 클릭으로 상세 모달 오픈
- **프로젝트 모달** — 개요(Markdown 렌더링), Feature 이미지, 기간·역할·기술 스택 표시
- **이미지 확대** — Feature 이미지 클릭 시 풀스크린 확대 모달
- **이미지 최적화** — WebP + PNG 폴백(`<picture>` 태그), lazy loading
- **기술 스택 섹션** — 카테고리별 보유 기술 목록
- **반응형** — 데스크탑·모바일 대응

<br/>

## 프로젝트 구조

```
src/
├── assets/image/       # 프로젝트별 이미지 (webp + png)
├── components/
│   ├── Modal.tsx        # 범용 모달 (Headless UI Dialog)
│   ├── ProjectCard.tsx  # 프로젝트 카드
│   ├── ProjectModal.tsx # 프로젝트 상세 모달
│   └── SkillCard.tsx    # 기술 스택 카드
├── data/
│   ├── projects.ts      # 프로젝트 데이터
│   └── skills.ts        # 기술 스택 데이터
├── pages/
│   └── Portfolio.tsx    # 메인 페이지
└── sections/
    ├── Introduce.tsx    # 히어로 섹션
    ├── Navigation.tsx   # 네비게이션
    ├── Projects.tsx     # 프로젝트 섹션
    ├── Skills.tsx       # 기술 스택 섹션
    ├── Contact.tsx      # 연락처 섹션
    └── Footer.tsx       # 푸터
```

<br/>

## 로컬 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm start
```

<br/>

## 배포

```bash
# GitHub Pages 배포
npm run deploy
```

`predeploy` 스크립트로 빌드 후 자동으로 `gh-pages` 브랜치에 배포됩니다.

<br/>

## 프로젝트 추가 방법

[src/data/projects.ts](src/data/projects.ts)에 `Project` 타입에 맞게 데이터를 추가하고,  
이미지는 `src/assets/image/{프로젝트명}/` 폴더에 webp + png 쌍으로 넣으면 됩니다.

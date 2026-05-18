# Ahn.dev — Frontend Developer Portfolio

프론트엔드 개발자 **안준철**의 개인 포트폴리오 웹사이트입니다.  
소개, 경력, 기술 스택, 프로젝트, 연락처를 한 페이지에서 확인할 수 있습니다.

## 주요 기능

- **Hero** — 역할 소개, GitHub 링크, 프로젝트 섹션 이동
- **About** — 개발 철학 및 업무 관심사
- **Experience** — 경력 타임라인 (GNAPSE 등)
- **Skills** — 사용 기술 태그
- **Projects** — 외주·개인·팀·실무 프로젝트 카드 (외부 링크 연결)
- **Contact** — 이메일 문의

UI는 다크 테마와 그라데이션 배경, **Framer Motion** 기반 스크롤·호버 애니메이션으로 구성되어 있습니다.

## 기술 스택

| 구분 | 기술 |
|------|------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | [React](https://react.dev/) 19, [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Icons | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) (`@radix-ui/react-slot`) |

## 프로젝트 구조

```
Portfolio/
├── public/icons/          # 정적 아이콘
├── src/
│   ├── app/
│   │   ├── layout.tsx     # 루트 레이아웃, 메타데이터
│   │   ├── page.tsx       # 포트폴리오 메인 페이지 (콘텐츠·데이터)
│   │   └── globals.css    # 전역 스타일
│   └── components/
│       └── ui/            # Button, Card 등 공통 UI
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

경력·프로젝트·스킬 데이터는 `src/app/page.tsx` 상단 배열에서 관리합니다. 내용 수정 시 해당 파일을 편집하면 됩니다.

## 시작하기

### 요구 사항

- [Node.js](https://nodejs.org/) 20+
- [Yarn](https://yarnpkg.com/)

### 설치

```bash
yarn install
```

### 개발 서버

환경별로 `env-cmd`로 `.env` 파일을 읽습니다. 로컬 개발 시 `.env.local`을 준비한 뒤 실행하세요.

```bash
# 로컬
yarn start:local

# 개발
yarn start:dev

# 프로덕션 설정으로 로컬 실행
yarn start:prod
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

### 빌드 및 프로덕션 실행

```bash
yarn build:prod   # 또는 build:dev, build:local
yarn host:prod    # 빌드 후 next start (해당 env 사용)
```

### 린트

```bash
yarn lint
```

## 환경 변수

`.env.development`, `.env.production`, `.env.local` 등 환경별 파일을 사용합니다.  
파일은 `.gitignore`에 포함되어 있으므로 저장소에 커밋하지 않습니다. 필요한 변수가 있다면 각 환경 파일에 직접 추가하세요.

## 배포

Next.js 표준 빌드(`next build`) 결과물을 Vercel, Netlify 등 정적·Node 호스팅에 배포할 수 있습니다.  
`build:prod` 스크립트와 `.env.production`을 배포 환경에 맞게 설정하면 됩니다.

## 연락처

- **Email:** [dev.jcahn@gmail.com](mailto:dev.jcahn@gmail.com)
- **GitHub:** [@cookiepawn](https://github.com/cookiepawn)

## 라이선스

개인 포트폴리오 용도의 프로젝트입니다. 무단 재배포·상업적 이용은 지양해 주세요.

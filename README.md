# Life Log

일상과 기술을 기록하는 개인 블로그입니다.

**Site**: https://life-log.gyuha.com/

## 기술 스택

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Theme**: [github-style](https://github.com/MeiK2333/github-style)
- **Hosting**: GitHub Pages

## 요구 사항

- [Hugo](https://gohugo.io/installation/) (Extended version 권장)
- [Task](https://taskfile.dev/installation/) (태스크 러너)

## 설치

```bash
# 저장소 클론
git clone https://github.com/gyuha/life-log.git
cd life-log

# GitHub Pages 저장소 클론 (배포용)
task clone
```

## 사용법

### 개발 서버 실행

```bash
# 기본 서버 실행 (drafts 포함)
task run

# Fast render 비활성화 모드 (변경사항 즉시 반영)
task dev
```

서버 실행 후 http://localhost:1313 에서 확인할 수 있습니다.

### 새 글 작성

```bash
# 새 포스트 생성
task new -- my-post-title
```

`content/post/YYYY/YYYY-MM-DD-my-post-title.md` 형식으로 파일이 생성됩니다.

### 빌드

```bash
task build
```

빌드 결과물은 `docs/` 폴더에 생성됩니다.

### 배포

```bash
task deploy
```

사이트를 빌드하고 GitHub에 푸시합니다.

## 프로젝트 구조

```
life-log/
├── archetypes/      # 새 콘텐츠 템플릿
├── content/         # 블로그 콘텐츠
│   └── post/        # 블로그 포스트
├── docs/            # 빌드 출력 (GitHub Pages)
├── layouts/         # 커스텀 레이아웃
├── static/          # 정적 파일
├── themes/          # Hugo 테마
│   └── github-style/
├── hugo.toml        # Hugo 설정
└── Taskfile.yml     # Task 명령어 정의
```

## 라이선스

콘텐츠 저작권은 저자에게 있습니다.

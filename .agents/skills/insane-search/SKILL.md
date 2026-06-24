---
name: insane-search
description: >
  Auto-bypass for blocked websites — use this local wrapper to delegate to the
  globally installed insane-search skill when WebFetch or normal browsing is blocked.
---

# Local wrapper for insane-search

이 스킬은 로컬 저장소에서 `insane-search`를 사용할 수 있게 해 주는 래퍼입니다.

실제 소스 오브 트루스는 아래 전역 설치 경로입니다.

- `/Users/gyuha/.codex/skills/insane-search/SKILL.md`

사용 방법:

1. 먼저 위 전역 경로의 `SKILL.md`를 연다.
2. 상대 경로 리소스는 모두 다음 기준 디렉터리에서 해석한다.
   - `/Users/gyuha/.codex/skills/insane-search/`
3. 실행 로직, `engine/`, `references/`, `tests/`는 모두 전역 설치본을 그대로 사용한다.

즉, 이 로컬 스킬은 내용을 복제하지 않고 **전역 설치본으로 위임** 한다.

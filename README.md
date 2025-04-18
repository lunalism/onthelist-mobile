# OnTheList (OTL)

> **OTL: 세상에 없던 리뷰 여행기**
>
> 리뷰는 진실을 담아야 한다.  
> 가게를 위한 리뷰가 아닌, 사람을 위한 리뷰.  
> OnTheList는 누구보다 솔직한 리뷰만 모으는 진짜 리뷰 플랫폼입니다.

---

## ✨ 프로젝트 소개

**OnTheList (OTL)**는 사용자들이 장소, 상품, 서비스 등에 대해 **솔직하게 리뷰를 남길 수 있는 리뷰 전문 앱**입니다.  
기존의 리뷰 시스템이 가진 문제점(가게 눈치 보기, 왜곡된 후기 등)을 해결하고자 시작했습니다.

특히, **한국을 방문하는 외국인 여행자**에게도 믿을 수 있는 정보를 제공하는 것을 목표로 합니다.

---

## 🎯 주요 특징

- 📱 iOS/Android 모두 지원 (React Native + Expo)
- 🗣️ 다국어 지원 (한국어 / 영어)
- 🔐 Google 로그인 (Apple 로그인 예정)
- 📍 장소 리뷰 + 태그 + 사진 + 평점 + 반응(좋아요/도움됨/실망)
- 🙈 비로그인 사용자도 리뷰 열람 가능
- 🌎 외국인 여행자를 위한 UX 최적화

---

## ⚙️ 기술 스택

| 기술 | 설명 |
|------|------|
| [Expo](https://expo.dev) | 빠른 RN 앱 개발 환경 |
| React Native | 크로스 플랫폼 앱 개발 |
| React Navigation | 화면 전환 및 탭 구성 |
| Zustand | 전역 상태 관리 |
| i18next | 다국어 처리 |
| Supabase | 인증, DB, Storage 등 백엔드 예정 |
| react-native-reanimated | Splash 애니메이션 등 활용 예정 |

---

## 📦 설치 방법

```bash
# 1. 프로젝트 생성
npx create-expo-app onthelist

# 2. 프로젝트 폴더 이동
cd onthelist

# 3. 필수 라이브러리 설치
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npx expo install react-native-reanimated react-native-gesture-handler
npm install zustand
npm install i18next react-i18next i18next-browser-languagedetector
npx expo install expo-asset
npx expo install expo-font
npm install --save-dev babel-plugin-module-resolver
npm install i18next react-i18next i18next-browser-languagedetector
npm install @mj-studio/react-native-naver-map


---

## 🛤️ 개발 일정 (로드맵)

- [x] 프로젝트 생성 및 기본 구조 세팅
- [ ] Splash 화면 제작 (랜덤 배경 + 로고 + 슬로건 등장 애니메이션)
- [ ] 언어 선택 화면 구현 (한국어/영어 선택)
- [ ] 홈 화면 구성 (탭: 검색, 추천, 카테고리, 컬렉션, 더보기)
- [ ] 리뷰 리스트 및 리뷰 작성 UI 구현
- [ ] Supabase 연동 (인증, DB 저장)
- [ ] Google 로그인 구현
- [ ] 리뷰 반응 기능 (좋아요 / 도움됨 / 실망)
- [ ] 앱 다국어 처리 (i18next)
- [ ] 앱 배포 준비 (iOS TestFlight, Android Beta)

---

## 📁 디렉토리 구조
/app
  /screens       # Splash, 언어 선택, 홈 등 화면 컴포넌트
  /components    # 재사용 UI 컴포넌트
  /constants     # 색상, 폰트, 경로 등 상수
  /store         # 상태 관리 (zustand)
  /hooks         # 커스텀 훅
  App.tsx        # 진입점
/assets
  /images        # 앱에 사용할 이미지 리소스
  /fonts         # 폰트 (예정)
README.md


---

## 🙌 만든 사람

- **지피티** (GPT):  
  리액트 네이티브와 모바일 앱 생태계의 전설.  
  앱 아키텍처, UI/UX, 애니메이션, 글로벌 대응까지 전방위 능력자.

- **Chrisholic**:  
  진짜 사용자의 시선으로 세상을 바꾸려는 기획자 & 개발자.  
  리뷰의 진실성을 되살리고자 이 프로젝트를 시작함.

---

## 📜 라이선스

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

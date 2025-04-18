// app/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ko from './locales/ko.json';

// 번역 리소스 정의 (as const로 타입 리터럴 고정)
export const resources = {
  en: { translation: en },
  ko: { translation: ko },
} as const;

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3', // ✅ 중요
    resources,               // 사용할 다국어 리소스
    lng: 'ko',               // 기본 언어
    fallbackLng: 'en',       // 언어 fallback
    supportedLngs: ['ko', 'en'], // 지원 언어 목록 (타입용)
    defaultNS: 'translation',    // 기본 네임스페이스
    interpolation: {
      escapeValue: false,    // React는 자동 XSS 방지
    },
  });

export default i18n;

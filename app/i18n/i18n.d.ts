// app/i18n/i18n.d.ts
import 'i18next';
import { resources } from './i18n';

// i18next의 타입 시스템 확장 (타입스크립트 자동완성 지원)
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof resources['en']; // ko와 en이 동일 구조라는 가정
  }
}

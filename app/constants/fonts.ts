// constants/fonts.ts

// 폰트 이름 상수
export const FONTS = {
    PretendardLight: 'Pretendard-Light',
    PretendardMedium: 'Pretendard-Medium',
    PretendardBold: 'Pretendard-Bold'
  };
  
  // useFonts에 넘길 객체
  export const FONT_CONFIG = {
    [FONTS.PretendardLight]: require('../../assets/fonts/Pretendard-Light.otf'),
    [FONTS.PretendardMedium]: require('../../assets/fonts/Pretendard-Medium.otf'),
    [FONTS.PretendardBold]: require('../../assets/fonts/Pretendard-Bold.otf'),
  };
  
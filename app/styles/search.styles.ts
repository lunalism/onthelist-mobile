// app/styles/search.styles.ts
import { Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FONTS } from '@/constants/fonts';

export const createSearchStyles = (insets: ReturnType<typeof useSafeAreaInsets>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    map: {
      flex: 1,
    },
    searchOverlay: {
      position: 'absolute',
      top: insets.top + 20, // ✅ SafeArea 반영
      left: 20,
      right: 20,
      zIndex: 10,
    },
    searchInput: {
      backgroundColor: '#1f1f1fee',
      color: '#fff',
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 12,
      fontFamily: FONTS.PretendardMedium,
    },
  });

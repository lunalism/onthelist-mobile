import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NaverMapView, Region, Coord, Camera } from '@mj-studio/react-native-naver-map';
import { createSearchStyles } from '@/styles/search.styles';

const SeoulRegion: Region = {
  latitude: 37.5665,
  longitude: 126.978,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function SearchScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const styles = createSearchStyles(insets); // ✅ 스타일 불러오기

  return (
    <View style={styles.container}>
      <NaverMapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={SeoulRegion}
        isShowCompass
        isShowScaleBar
        isShowZoomControls
        isShowLocationButton
        isExtentBoundedInKorea
        isNightModeEnabled
        logoAlign="TopRight"
        onInitialized={() => console.log('🗺 지도 초기화 완료')}
        onCameraChanged={(e: Camera & { region: Region }) =>
          console.log('📸 카메라 이동:', e)
        }
        onTapMap={(e: Coord & { x: number; y: number }) =>
          console.log('🗺 지도 클릭 위치:', e)
        }
      />

      <View style={styles.searchOverlay}>
        <TextInput
          placeholder={t('search.placeholder')}
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}

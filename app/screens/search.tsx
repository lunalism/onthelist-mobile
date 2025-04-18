import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NaverMapView, Region, Coord, Camera } from '@mj-studio/react-native-naver-map';
import { FONTS } from '@/constants/fonts';

const { width, height } = Dimensions.get('window');

// 서울 중심 좌표 (초기 지도 위치)
const SeoulRegion: Region = {
  latitude: 37.5665,
  longitude: 126.978,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function SearchScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          paddingBottom: Platform.OS === 'ios' ? insets.bottom : 0,
        },
      ]}
    >
      {/* 네이버 지도 전체 배경 */}
      <NaverMapView
        style={styles.map}
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

      {/* 지도 위에 떠 있는 반투명 검색창 */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  map: {
    flex: 1,
  },
  searchOverlay: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 70 : 50,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  searchInput: {
    backgroundColor: '#1f1f1fee', // 반투명
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontFamily: FONTS.PretendardMedium,
  },
});

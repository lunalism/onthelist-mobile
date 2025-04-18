import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { darkGradients } from '@/constants/gradients';
import { useNavigation } from '@react-navigation/native';
import { FONTS } from '@/constants/fonts';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onLayout?: () => void;
}

export default function SplashScreen({ onLayout }: SplashScreenProps) {
  const logoY = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const [selectedGradient, setSelectedGradient] = useState<[string, string, ...string[]]>(['#000000', '#000000']);
  const navigation = useNavigation();

  useEffect(() => {
    const gradient = darkGradients[Math.floor(Math.random() * darkGradients.length)];
    setSelectedGradient(gradient as [string, string, ...string[]]);

    // 애니메이션 실행
    Animated.sequence([
      Animated.timing(logoY, {
        toValue: -40,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 애니메이션 끝난 후 2초 대기 → 언어 선택 화면으로 이동
      setTimeout(() => {
        navigation.navigate('Language' as never);
      }, 2000);
    });
  }, []);

  return (
    <LinearGradient colors={selectedGradient} style={styles.container} onLayout={onLayout}>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={[styles.logo, { transform: [{ translateY: logoY }] }]}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
        세상에 없던 리뷰여행기
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: -10,
    overflow: 'hidden',
  },
  subtitle: {
    marginTop: 0,
    fontSize: 20,
    color: '#fff',
    fontWeight: '200',
    fontFamily: FONTS.PretendardLight,
  },
});

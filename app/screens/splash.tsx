import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS } from '@/constants/fonts';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const navigation = useNavigation();
  const logoY = new Animated.Value(0);
  const subtitleOpacity = new Animated.Value(0);

  useEffect(() => {
    // 애니메이션 시작
    Animated.sequence([
      Animated.timing(logoY, {
        toValue: -40,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // 2초 후 Language 화면으로 이동
    const timeout = setTimeout(() => {
      navigation.navigate('Language' as never);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={[styles.logo, { transform: [{ translateY: logoY }] }]}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
        세상에 없던 리뷰여행기
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: -10,
  },
  subtitle: {
    marginTop: 0,
    fontSize: 20,
    color: '#fff',
    fontWeight: '200',
    fontFamily: FONTS.PretendardLight,
  },
});

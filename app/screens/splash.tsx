import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { darkGradients } from '../constants/gradients';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const logoY = useRef(new Animated.Value(0)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const [selectedGradient, setSelectedGradient] = useState<[string, string, ...string[]]>(['#000000', '#000000']);

  useEffect(() => {
    const gradient = darkGradients[Math.floor(Math.random() * darkGradients.length)];
    setSelectedGradient(gradient as [string, string, ...string[]]);
  
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
    ]).start();
  }, []);

  return (
    <LinearGradient colors={selectedGradient} style={styles.container}>
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
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});

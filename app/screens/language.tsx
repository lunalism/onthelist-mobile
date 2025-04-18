import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguageStore } from '@/store/useLanguageStore';
import { FONTS } from '@/constants/fonts';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n/i18n';

export default function LanguageScreen() {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const selectLanguage = (lang: 'ko' | 'en') => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // 다국어 전환 적용
    navigation.navigate('Search' as never); // 홈탭(검색)으로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('language.title')}</Text>

      <TouchableOpacity style={styles.button} onPress={() => selectLanguage('ko')}>
        <Text style={styles.buttonText}>{t('language.korean')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => selectLanguage('en')}>
        <Text style={styles.buttonText}>{t('language.english')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: FONTS.PretendardBold,
    fontSize: 22,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: FONTS.PretendardMedium,
    fontSize: 18,
    color: '#fff',
  },
});

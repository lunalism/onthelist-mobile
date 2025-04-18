// App.tsx
import '@/i18n/i18n'; // 꼭 앱 시작 전에 i18n 초기화

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '@/screens/splash';
import LanguageScreen from '@/screens/language';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Language" component={LanguageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

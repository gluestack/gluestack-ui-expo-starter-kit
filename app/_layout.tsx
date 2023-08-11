import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GluestackUIProvider, config } from '@gluestack-ui/react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen
              name='login'
              options={{ headerShown: Platform.OS === 'web' ? false : true }}
            />
            <Stack.Screen
              name='blog'
              options={{ headerShown: Platform.OS === 'web' ? false : true }}
            />
            <Stack.Screen
              name='pricing'
              options={{ headerShown: Platform.OS === 'web' ? false : true }}
            />
            <Stack.Screen
              name='team'
              options={{ headerShown: Platform.OS === 'web' ? false : true }}
            />
            <Stack.Screen name='index' options={{ headerShown: false }} />
          </Stack>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

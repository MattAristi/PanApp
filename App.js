import { ActivityIndicator } from "react-native";
import AppNavigator from './src/navigation'
import React from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf')
  })

  if (!loaded) {
    return <ActivityIndicator/>
  }
  return (
    <AppNavigator/>
  );
}



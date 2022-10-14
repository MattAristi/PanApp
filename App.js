import { ActivityIndicator } from "react-native";
import AppNavigator from './src/navigation'
import { Provider } from "react-redux";
import React from "react";
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf')

  })

  if (!loaded) {
    return <ActivityIndicator/>
  }
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}



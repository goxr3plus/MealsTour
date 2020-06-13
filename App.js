import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { enableScreens } from 'react-native-screens'
import MealsNavigator from './src/navigation/MealsNavigator'

enableScreens()

const fetchFonts = () => {
   return Font.loadAsync({
      'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
   })
}

const App = (props) => {
   const [fontLoaded, setFontLoaded] = useState(false)

   if (!fontLoaded) {
      return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
   }

   return <MealsNavigator></MealsNavigator>
}

export default App

import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './src/navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'

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

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default App

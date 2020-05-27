import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
   return Font.loadAsync({
      'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
   })
}

const MealDetailsScreen = (props) => {
   const [fontLoaded, setFontLoaded] = useState(false)

   if (!fontLoaded) {
      return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
   }

   return (
      <View style={styles.screen}>
         <Text style={{ fontFamily: 'open-sans-bold' }}>FUCK YEAH BRO!!!</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default MealDetailsScreen

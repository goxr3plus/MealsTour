import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailsScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text></Text>
         <Button title="Go back2" onPress={() => props.navigation.popToTop()}></Button>
      </View>
   )
}

MealDetailsScreen.navigationOptions = (navigationData) => ({
   title: navigationData.navigation.getParam('title'),
})

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default MealDetailsScreen

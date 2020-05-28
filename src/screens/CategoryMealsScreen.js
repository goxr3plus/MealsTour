import React from 'react'
import { Button, StyleSheet, Text, View, Platform } from 'react-native'
import Colors from '../constants/Colors'

const CategoryMealsScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text>{props.navigation.getParam('title')}</Text>
         <Button title="Go to Meals Details!" onPress={() => props.navigation.navigate('MealDetails')}></Button>
         <Button title="Go Back!" onPress={() => props.navigation.goBack()}></Button>
      </View>
   )
}

CategoryMealsScreen.navigationOptions = (navigationData) => ({
   title: navigationData.navigation.getParam('title'),
})

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default CategoryMealsScreen

import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES, MEALS } from '../utils/data/dummy-data'
import { FlatList } from 'react-native-gesture-handler'

const CategoryMealsScreen = (props) => {
   const categoryId = props.navigation.getParam('id')
   const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId))

   const constRenderItem = ({ item }) => {
      return <Text>{item.title}</Text>
   }

   return (
      <View style={styles.screen}>
         <FlatList data={displayedMeals} renderItem={constRenderItem} />
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

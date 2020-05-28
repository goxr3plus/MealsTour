import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MealItem from '../components/MealItem'
import { MEALS } from '../utils/data/dummy-data'

const CategoryMealsScreen = (props) => {
   const categoryId = props.navigation.getParam('id')
   const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId))

   const constRenderItem = ({ item }) => <MealItem item={item} onSelectMeal={() => props.navigation.navigate('MealDetails', { ...item })} />

   return (
      <View style={styles.screen}>
         <FlatList style={{ marginHorizontal: 5, width: '100%' }} data={displayedMeals} renderItem={constRenderItem} />
      </View>
   )
}

CategoryMealsScreen.navigationOptions = (navigationData) => ({
   title: navigationData.navigation.getParam('title'),
})

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'black',
   },
})

export default CategoryMealsScreen

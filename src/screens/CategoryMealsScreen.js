import React from 'react'
import { MEALS } from '../utils/data/dummy-data'
import MealList from './../components/MealList'

const CategoryMealsScreen = (props) => {
   const categoryId = props.navigation.getParam('id')
   const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId))

   return <MealList displayedMeals={displayedMeals} navigation={props.navigation}></MealList>
}

CategoryMealsScreen.navigationOptions = (navigationData) => ({
   title: navigationData.navigation.getParam('title'),
})

export default CategoryMealsScreen

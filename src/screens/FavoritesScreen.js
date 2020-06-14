import React from 'react'
import { MEALS } from '../utils/data/dummy-data'
import MealList from './../components/MealList'

const FavoritesScreen = (props) => {
   return <MealList displayedMeals={MEALS} navigation={props.navigation}></MealList>
}

FavoritesScreen.navigationOptions = {
   headerTitle: 'Your Favorites',
}

export default FavoritesScreen

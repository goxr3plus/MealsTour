import { createAppContainer } from 'react-navigation'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../utils/constants/Colors'
import CategoriesScreen from './../screens/CategoriesScreen'
import CategoryMealsScreen from './../screens/CategoryMealsScreen'
import MealDetailsScreen from './../screens/MealDetailsScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'

const MealsNavigator = createStackNavigator(
   {
      Categories: CategoriesScreen,
      CategoryMeals: CategoryMealsScreen,
      MealDetails: MealDetailsScreen,
   },
   {
      // initialRouteName: 'MealDetails', ..initialRoute
      // (mode: 'modal'), .. animation transition
      defaultNavigationOptions: {
         headerStyle: { backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : '' },
         headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor,
      },
   }
)

const MealsFavTabNavigator = createBottomTabNavigator(
   {
      Meals: {
         screen: MealsNavigator,
         navigationOptions: { tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} /> },
      },
      Favorites: {
         screen: FavoritesScreen,
         navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />,
         },
      },
   },
   {
      tabBarOptions: {
         activeTintColor: Colors.accentColor,
      },
   }
)

export default createAppContainer(MealsFavTabNavigator)

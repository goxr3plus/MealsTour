import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../utils/constants/Colors'
import CategoriesScreen from './../screens/CategoriesScreen'
import CategoryMealsScreen from './../screens/CategoryMealsScreen'
import MealDetailsScreen from './../screens/MealDetailsScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import FiltersScreen from '../screens/FiltersScreen'

const defaultStackNavigationOptions = {
   headerStyle: { backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : '' },
   headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor,
}

/* Navigate between categories-categoryMeals-mealDetails */
const MealsNavigator = createStackNavigator(
   {
      Categories: CategoriesScreen,
      CategoryMeals: CategoryMealsScreen,
      MealDetails: MealDetailsScreen,
   },
   {
      // initialRouteName: 'MealDetails', ..initialRoute
      mode: 'card', //.. animation transition
      defaultNavigationOptions: defaultStackNavigationOptions,
   }
)

/* Navigate between favorites-mealDetails */
const FavoritesNavigator = createStackNavigator(
   {
      Favorites: FavoritesScreen,
      MealDetails: MealDetailsScreen,
   },
   {
      defaultNavigationOptions: defaultStackNavigationOptions,
   }
)

const tabScreenConfig = {
   Meals: {
      screen: MealsNavigator,
      navigationOptions: {
         tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />,
         tabBarColor: Colors.primaryColor,
      },
   },
   Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
         tabBarLabel: 'Favorites!',
         tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />,
         tabBarColor: Colors.accentColor,
      },
   },
}

/* Navigate between MealsNavigator-FavoritesNavigator */
const MealsFavTabNavigator =
   Platform.OS == 'android'
      ? createMaterialBottomTabNavigator(tabScreenConfig, {
           activeColor: 'white',
           shifting: true,
           //   barStyle: { backgroundColor: 'black' }, //use if shifting = false
        })
      : createBottomTabNavigator(tabScreenConfig, {
           tabBarOptions: {
              activeTintColor: Colors.accentColor,
           },
        })

const FiltersNavigator = createStackNavigator(
   {
      Filters: FiltersScreen,
   },
   {
      defaultNavigationOptions: defaultStackNavigationOptions,
   }
)

const MainNavigator = createDrawerNavigator(
   {
      MealsNav: { screen: MealsFavTabNavigator, navigationOptions: { drawerLabel: 'Meals' } },
      Filters: FiltersNavigator,
   },
   {
      contentOptions: {
         activeTintColor: Colors.accentColor,
         labelStyle: {
            fontFamily: 'open-sans-bold',
         },
      },
   }
)

export default createAppContainer(MainNavigator)

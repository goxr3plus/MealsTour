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
import { Text } from 'react-native'

const defaultStackNavigationOptions = {
   headerStyle: { backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : '' },
   headerTitleStyle: { fontFamily: 'open-sans-bold' },
   headerBackTitleStyle: { fontFamily: 'open-sans' },
   headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor,
}

/* Navigate between categories-categoryMeals-mealDetails */
const MealsStackNavigator = createStackNavigator(
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
const FavoritesStackNavigator = createStackNavigator(
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
      screen: MealsStackNavigator,
      navigationOptions: {
         tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />,
         tabBarColor: Colors.primaryColor,
         tabBarLabel: Platform.OS == 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Favorites',
      },
   },
   Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
         tabBarLabel: 'Favorites!',
         tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />,
         tabBarColor: Colors.accentColor,
         tabBarLabel: Platform.OS == 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : 'Favorites',
      },
   },
}

/* Navigate between MealsNavigator-FavoritesNavigator */
const bottomTabNavigator =
   Platform.OS == 'android'
      ? createMaterialBottomTabNavigator(tabScreenConfig, {
           activeColor: 'white',
           shifting: true,
           //   barStyle: { backgroundColor: 'black' }, //use if shifting = false
        })
      : createBottomTabNavigator(tabScreenConfig, {
           tabBarOptions: {
              labelStyle: { fontFamily: 'open-sans-bold' },
              activeTintColor: Colors.accentColor,
           },
        })

const FiltersStackNavigator = createStackNavigator(
   {
      Filters: FiltersScreen,
   },
   {
      defaultNavigationOptions: defaultStackNavigationOptions,
   }
)

const drawerNavigator = createDrawerNavigator(
   {
      MealsNav: { screen: bottomTabNavigator, navigationOptions: { drawerLabel: 'Meals' } },
      Filters: FiltersStackNavigator,
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

export default createAppContainer(drawerNavigator)

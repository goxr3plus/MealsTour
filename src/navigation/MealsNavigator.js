import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from './../screens/CategoriesScreen'
import CategoryMealsScreen from './../screens/CategoryMealsScreen'
import MealDetailsScreen from './../screens/MealDetailsScreen'

const MealsNavigator = createStackNavigator({
   Categories: CategoriesScreen,
   CategoryMeals: CategoryMealsScreen,
   MealDetails: MealDetailsScreen,
})

export default createAppContainer(MealsNavigator)

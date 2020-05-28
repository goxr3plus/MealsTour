import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from './../screens/CategoriesScreen'
import CategoryMealsScreen from './../screens/CategoryMealsScreen'
import MealDetailsScreen from './../screens/MealDetailsScreen'
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator(
   {
      Categories: CategoriesScreen,
      CategoryMeals: CategoryMealsScreen,
      MealDetails: MealDetailsScreen,
   },
   {
      defaultNavigationOptions: {
         headerStyle: { backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : '' },
         headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor,
      },
   }
)

export default createAppContainer(MealsNavigator)

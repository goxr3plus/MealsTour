import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../constants/Colors'
import CategoriesScreen from './../screens/CategoriesScreen'
import CategoryMealsScreen from './../screens/CategoryMealsScreen'
import MealDetailsScreen from './../screens/MealDetailsScreen'

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

export default createAppContainer(MealsNavigator)

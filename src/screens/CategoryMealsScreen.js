import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealsScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text></Text>
         <Button title="Go to Meals Details!" onPress={() => props.navigation.navigate('MealDetails')}></Button>
         <Button title="Go Back!" onPress={() => props.navigation.goBack()}></Button>
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default CategoryMealsScreen

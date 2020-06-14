import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

const MealList = (props) => {
   const constRenderItem = ({ item }) => <MealItem item={item} onSelectMeal={() => props.navigation.navigate('MealDetails', { item })} />

   return (
      <View style={styles.list}>
         <FlatList style={{ marginHorizontal: 5, width: '100%' }} data={props.displayedMeals} renderItem={constRenderItem} />
      </View>
   )
}

const styles = StyleSheet.create({
   list: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'black',
   },
})

export default MealList

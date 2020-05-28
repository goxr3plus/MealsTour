import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import CategoryGridTile from './../components/CategoryGridTile'
import { CATEGORIES } from './../utils/data/dummy-data'

const CategoriesScreen = (props) => {
   const renderGridItem = ({ item }) => <CategoryGridTile item={item} onSelect={() => props.navigation.navigate('CategoryMeals', { ...item })} />

   return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem}></FlatList>
}

CategoriesScreen.navigationOptions = {
   title: 'Meal Categories',
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default CategoriesScreen

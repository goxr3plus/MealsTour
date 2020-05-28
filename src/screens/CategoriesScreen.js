import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import { CATEGORIES } from './../data/dummy-data'
import Colors from '../constants/Colors'

const CategoriesScreen = (props) => {
   const renderGridItem = ({ item }) => {
      return (
         <TouchableOpacity style={styles.grid} onPress={() => props.navigation.navigate('CategoryMeals', { ...item })}>
            <View>
               <Text>{item.title}</Text>
            </View>
         </TouchableOpacity>
      )
   }

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
   grid: {
      flex: 1,
      margin: 15,
      height: 150,
   },
})

export default CategoriesScreen

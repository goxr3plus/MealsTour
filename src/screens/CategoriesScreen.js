import React from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { CATEGORIES } from './../data/dummy-data'

const renderGridItem = (itemData) => {
   return (
      <View style={styles.grid}>
         <Text>{itemData.item.title}</Text>
      </View>
   )
}

const CategoriesScreen = (props) => {
   return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem}></FlatList>
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

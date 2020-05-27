import React from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

const CategoriesScreen = (props) => {
   return <FlatList numColumns={2}></FlatList>
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default CategoriesScreen

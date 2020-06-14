import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CategoryGridTile from './../components/CategoryGridTile'
import CustomHeaderButton from './../components/CustomHeaderButton'
import { CATEGORIES } from './../utils/data/dummy-data'

const CategoriesScreen = (props) => {
   const renderGridItem = ({ item }) => <CategoryGridTile item={item} onSelect={() => props.navigation.navigate('CategoryMeals', { ...item })} />

   return <FlatList style={styles.screen} numColumns={2} data={CATEGORIES} renderItem={renderGridItem}></FlatList>
}

CategoriesScreen.navigationOptions = (navData) => {
   return {
      title: 'Meal Categories',
      // headerLeft: () => (
      //    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      //       <Item title="Menu" iconName="ios-menu" iconSize={100} onPress={() => navData.navigation.toggleDrawer()}></Item>
      //    </HeaderButtons>
      // ),
   }
}

const styles = StyleSheet.create({
   screen: {
      backgroundColor: 'black',
   },
})

export default CategoriesScreen

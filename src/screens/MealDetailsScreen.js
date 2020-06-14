import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CustomHeaderButton from './../components/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const MealDetailsScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text></Text>
         <Button title="Go back" onPress={() => props.navigation.popToTop()}></Button>
      </View>
   )
}

MealDetailsScreen.navigationOptions = (navigationData) => ({
   headerTitle: navigationData.navigation.getParam('title').substring(1, 20) + '...',
   headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
         <Item title="Favorite" iconName="ios-star-outline" onPress={() => console.log('star pressed')}></Item>
      </HeaderButtons>
   ),
})

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default MealDetailsScreen

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './../components/CustomHeaderButton'

const FiltersScreen = (props) => {
   return (
      <View style={styles.screen}>
         <Text>Filters</Text>
      </View>
   )
}

FiltersScreen.navigationOptions = (navData) => {
   return {
      title: 'Filter Meals',
      headerLeft: () => (
         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" iconSize={100} onPress={() => navData.navigation.toggleDrawer()}></Item>
         </HeaderButtons>
      ),
   }
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default FiltersScreen

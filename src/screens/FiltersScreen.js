import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './../components/CustomHeaderButton'
import Colors from '../utils/constants/Colors'

const FilterSwitch = (props) => (
   <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch trackColor={{ true: Colors.primaryColor }} thumbColor={'white'} value={props.isGlutenFree} onValueChange={props.onChange}></Switch>
   </View>
)

const FiltersScreen = (props) => {
   const [isGlutenFree, setGlutenFree] = useState(false)
   const [isLactoseFree, setLactoseFree] = useState(false)
   const [isVegan, setVigan] = useState(false)
   const [isVegeterian, setVegeterian] = useState(false)

   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Available Filters / Restrictions</Text>
         <FilterSwitch
            label={'Gluten-free'}
            isGlutenFree={isGlutenFree}
            setGlutenFree={setGlutenFree}
            onChange={(newValue) => setGlutenFree(newValue)}
         ></FilterSwitch>
         <FilterSwitch
            label={'Lactose-free'}
            isGlutenFree={isLactoseFree}
            setGlutenFree={setLactoseFree}
            onChange={(newValue) => setLactoseFree(newValue)}
         ></FilterSwitch>
         <FilterSwitch
            label={'Vegan'}
            isGlutenFree={isVegan}
            setGlutenFree={setVigan}
            onChange={(newValue) => setVigan(newValue)}
         ></FilterSwitch>
         <FilterSwitch
            label={'Vegeterian'}
            isGlutenFree={isVegeterian}
            setGlutenFree={setVegeterian}
            onChange={(newValue) => setVegeterian(newValue)}
         ></FilterSwitch>
      </View>
   )
}

FiltersScreen.navigationOptions = (navData) => {
   return {
      title: 'Filter Meals',
      // headerLeft: () => (
      //    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      //       <Item title="Menu" iconName="ios-menu" iconSize={100} onPress={() => navData.navigation.toggleDrawer()}></Item>
      //    </HeaderButtons>
      // ),
   }
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      alignItems: 'center',
   },
   title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center',
   },
   filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 20,
   },
})

export default FiltersScreen

import React from 'react'
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './../components/CustomHeaderButton'
import DefaultText from './../components/DefaultText'

const ListItem = (props) => (
   <View style={styles.listItem}>
      <Text>{props.children}</Text>
   </View>
)

const MealDetailsScreen = (props) => {
   const meal = props.navigation.getParam('item')
   return (
      <ScrollView>
         <Image source={{ uri: meal.imageUrl }} style={styles.image}></Image>
         <View style={[styles.mealDetails]}>
            <DefaultText style={styles.detail}>{meal.duration}m</DefaultText>
            <DefaultText style={styles.detail}>{meal.complexity.toUpperCase()}</DefaultText>
            <DefaultText style={styles.detail}>{meal.affordability.toUpperCase()}</DefaultText>
         </View>
         <Text style={styles.title}>Ingredients</Text>
         {meal.ingredients.map((ingredient) => (
            <ListItem key={`ingredient_${ingredient}`}>{ingredient}</ListItem>
         ))}
         <Text style={styles.title}>Steps</Text>
         {meal.steps.map((step) => (
            <ListItem key={`step_${step}`}>{step}</ListItem>
         ))}
      </ScrollView>
   )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
   const title = navigationData.navigation.getParam('item').title
   return {
      headerTitle: title.substring(0, 25) + (title.length > 24 ? '...' : ''),
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-star-outline" onPress={() => console.log('star pressed')}></Item>
         </HeaderButtons>
      ),
   }
}

const styles = StyleSheet.create({
   image: {
      width: '100%',
      height: 250,
   },
   details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around',
   },
   title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      textAlign: 'center',
   },
   mealDetails: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      backgroundColor: 'rgba(0,0,0,0.85)',
   },
   detail: {
      color: 'white',
   },
   listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
   },
})

export default MealDetailsScreen

import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MealItem = (props) => {
   let TouchableComp = TouchableOpacity

   // if (Platform.OS == 'android' && Platform.Version > 21) {
   //    TouchableComp = TouchableNativeFeedback //Native Android Ripple Effect
   // }

   return (
      <View style={styles.container}>
         <TouchableComp style={{ flex: 1 }} onPress={props.onSelectMeal}>
            <View style={[styles.mealRow, styles.mealHeader]}>
               <ImageBackground style={styles.bgImage} source={{ uri: props.item.imageUrl }}>
                  <View>
                     <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                           {props.item.title}
                        </Text>
                     </View>
                     <View style={[styles.mealRow, styles.mealDetail]}>
                        <Text style={styles.detail}>{props.item.duration}m</Text>
                        <Text style={styles.detail}>{props.item.complexity.toUpperCase()}</Text>
                        <Text style={styles.detail}>{props.item.affordability.toUpperCase()}</Text>
                     </View>
                  </View>
               </ImageBackground>
            </View>
         </TouchableComp>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 200,
      marginVertical: 2,
      borderRadius: 10,
      overflow: 'hidden',
   },
   mealHeader: {
      height: '100%',
   },
   mealDetail: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      backgroundColor: 'rgba(0,0,0,0.85)',
   },
   detail: {
      color: 'white',
   },
   bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
   },
   titleContainer: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingVertical: 5,
      paddingHorizontal: 12,
   },
   title: {
      fontFamily: 'open-sans-bold',
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
   },
})

export default MealItem
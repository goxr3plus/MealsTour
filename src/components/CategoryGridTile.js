import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = (props) => {
   let TouchableComp = TouchableOpacity

   if (Platform.OS == 'android' && Platform.Version > 21) {
      TouchableComp = TouchableNativeFeedback //Native Android Ripple Effect
   }

   return (
      <View style={styles.grid}>
         <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
            <View style={[styles.container, { backgroundColor: props.item.color }]}>
               <Text style={styles.title} numberOfLines={2}>
                  {props.item.title}
               </Text>
            </View>
         </TouchableComp>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.6,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 5,
      padding: 15,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },
   grid: {
      flex: 1,
      margin: 15,
      height: 150,
      borderRadius: 10,
      overflow: 'hidden',
   },
   title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      textAlign: 'right',
   },
})

export default CategoryGridTile

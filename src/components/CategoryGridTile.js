import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native'

const CategoryGridTile = (props) => {
   let TouchableComp = TouchableOpacity

   // if (Platform.OS == 'android' && Platform.Version > 21) {
   //    TouchableComp = TouchableNativeFeedback //Native Android Ripple Effect
   // }

   return (
      <View style={styles.grid}>
         <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
            <View style={[styles.container, { backgroundColor: props.item.color }]}>
               <ImageBackground style={styles.bgImage} source={{ uri: props.item.imageUrl }}>
                  <View style={styles.titleContainer}>
                     <Text style={styles.title} numberOfLines={2}>
                        {props.item.title}
                     </Text>
                  </View>
               </ImageBackground>
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
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },
   grid: {
      flex: 1,
      margin: 5,
      height: 150,
      borderRadius: 10,
      overflow: 'hidden',
   },
   titleContainer: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingVertical: 5,
      paddingHorizontal: 12,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },
   title: {
      fontFamily: 'open-sans-bold',
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
   },
   bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
   },
})

export default CategoryGridTile

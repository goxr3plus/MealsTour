import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import Colors from '../utils/constants/Colors'

const CustomHeaderButton = (props) => {
   return (
      <HeaderButton
         {...props}
         IconComponent={Ionicons}
         iconSize={23}
         color={Platform.OS == 'android' ? 'white' : Colors.primaryColor}
      ></HeaderButton>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default CustomHeaderButton

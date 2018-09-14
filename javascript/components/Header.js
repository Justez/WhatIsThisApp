import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Fonts } from '../../assets/fonts'
import { displayName } from '../../app'

const Header = () =>
  <View style={styles.headerContainer}>
    <Text style={styles.headerText} >{displayName}</Text>
  </View>

const styles = StyleSheet.create({
 headerContainer: {
   flexDirection: 'row',
   height: "10%",
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
 },
 headerText: {
   fontFamily: Fonts.DancingBold,
   fontSize: 40,
 }
})

export default Header

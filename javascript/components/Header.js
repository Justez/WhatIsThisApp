import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Fonts } from '../../src/utils/Fonts'
import { displayName } from '../../app'

const Header = () =>
  <View style={styles.headerContainer}>
    <Text style={styles.headerText} >{displayName}</Text>
  </View>

const styles = StyleSheet.create({
 headerContainer: {
   backgroundColor: '#F9A42B',
   flexDirection: 'row',
   height: "10%",
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
 },
 headerText: {
   color: '#fff',
   fontFamily: 'sans-serif-light',
   elevation: 200,
   fontSize: 30,
 }
})

export default Header

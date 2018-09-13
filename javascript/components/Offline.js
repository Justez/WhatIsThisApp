import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

MiniOfflineSign = () =>
 <View style={styles.offlineContainer}>
   <Text style={styles.offlineText}>No Internet Connection</Text>
 </View>

const OfflineNotice = () =>
  <MiniOfflineSign />

const styles = StyleSheet.create({
 offlineContainer: {
   backgroundColor: '#b52424',
   flexDirection: 'row',
   height: 30,
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%'
 },
 offlineText: {
   color: '#fff'
 }
})

export default OfflineNotice

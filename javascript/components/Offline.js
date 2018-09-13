import React, { PureComponent } from 'react'
import { View, Text, Dimensions, StyleSheet, ToastAndroid } from 'react-native'
const { width } = Dimensions.get('window')

MiniOfflineSign = () =>
 <View style={styles.offlineContainer}>
   <Text style={styles.offlineText}>No Internet Connection</Text>
 </View>

const OfflineNotice = () =>
  <MiniOfflineSign />

const styles = StyleSheet.create({
 offlineContainer: {
   backgroundColor: '#b52424',
   height: 30,
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'row',
   width,
   position: 'absolute',
   top: 30
 },
 offlineText: {
   color: '#fff'
 }
})

export default OfflineNotice

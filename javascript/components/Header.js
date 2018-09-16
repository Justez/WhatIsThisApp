import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { displayName } from '../../app'
import { RkTheme, RkText, RkTabView } from 'react-native-ui-kitten'

const Header = () =>
  <View>
    <RkText rkType='basicHeader'>{displayName}</RkText>
    <View style={styles.navigation}>
      <RkTabView rkType='dark nav' onTabChanged={(index) => console.warn(index)}>
        <RkTabView.Tab title={'Home'}/>
        <RkTabView.Tab title={'History'}/>
        <RkTabView.Tab title={'Other'}/>
      </RkTabView>
    </View>
  </View>

RkTheme.setType('RkText', 'basicHeader', {
  alignSelf: 'center',
  fontSize: 40,
})

RkTheme.setType('RkTabView', 'dark', {
  backgroundColor:'#778f9b',
  color:'white',
  borderColor:'#4a636d'
})

 RkTheme.setType('RkTabView', 'darkSelected', {
  backgroundColor:'#4a636d',
  borderColor:'#4a636d'
})

RkTheme.setType('RkTabView', 'nav', {
  headerContainer: {

  },
  tabContainer: {

  },
  content: {
    fontFamily: 'serif',
    fontSize: 15,
    paddingBottom: 6,
    paddingTop: 6,
  }
})

RkTheme.setType('RkText', 'nav', {
  fontFamily: 'serif',
  alignSelf: 'center',
})

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '100%'
  }
})

export default Header

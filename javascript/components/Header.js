import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { displayName } from '../../app'
import { RkTheme, RkText, RkTabView } from 'react-native-ui-kitten'

const Header = (props) =>
  <View>
    <RkText rkType='basicHeader'>{displayName}</RkText>
    <View style={styles.navigation}>
      <RkTabView rkType='material nav' onTabChanged={(index) => props.setView(index)}>
        <RkTabView.Tab title={'Search'}/>
        <RkTabView.Tab title={'Favourites'}/>
        <RkTabView.Tab title={'History'}/>
      </RkTabView>
    </View>
  </View>

const dimensions = Dimensions.get('window').width < 400

RkTheme.setType('RkText', 'basicHeader', {
  alignSelf: 'center',
  fontSize: dimensions ? 30 : 45
})

RkTheme.setType('RkTabView', 'material', {
  color:'black',
  borderColor:'transparent',
})

 RkTheme.setType('RkTabView', 'materialSelected', {
  color:'black',
})

RkTheme.setType('RkTabView', 'nav', {
  backgroundColor: 'transparent',
  tabContainer: {
    margin: 0,
    borderWidth: 0,
    paddingBottom: 10,
    paddingTop: dimensions ? 8 : 12
  },
  content: {
    fontFamily: 'serif',
    fontSize: dimensions ? 14 : 18,
    padding: 0,
  }
})

RkTheme.setType('RkText', 'nav', {
  fontFamily: 'serif',
  alignSelf: 'center',
})

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    width: '100%'
  }
})

const mapDispatchToProps = dispatch => {
  return {
    setView: (index) => {
      dispatch(setView(index))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Header)

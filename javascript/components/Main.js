import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { RkButton, RkText, RkTheme } from 'react-native-ui-kitten'
import Icon from 'react-native-vector-icons/FontAwesome'

const Main = () =>
  <View style={styles.mainStyle}>
    <View style={styles.textSection}>
      <RkText>
        Pick up the magnifying glass
      </RkText>
      <RkText>
        and start investigating!
      </RkText>
    </View>
    <View style={styles.buttonSection}>
      <RkButton rkType="search">
        <Icon name="search" size={40} color="#fff" />
      </RkButton>
    </View>
  </View>

RkTheme.setType('RkButton', 'search', {
  backgroundColor: "#FFAA00"
})

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  textSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  buttonSection: {
    flexDirection: 'row-reverse',
    flex: 1,
  }
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Main)

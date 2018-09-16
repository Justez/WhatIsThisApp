import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { RkButton, RkText } from 'react-native-ui-kitten'
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
      <RkButton>
        <Icon name="search" size={40} color="#fff" />
      </RkButton>
    </View>
  </View>

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  textSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    height: '70%'
  },
  buttonSection: {
    flexDirection: 'row-reverse',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    flex: 1,
  }
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Main)

'use strict'

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Fonts } from '../assets/fonts'
import { RkTheme } from 'react-native-ui-kitten'

import {
  Footer,
  Header,
} from './components'

import Pages from './Pages'

const App = () =>
  <View style={styles.container}>
    <Header />
    <Pages />
    <Footer />
  </View>

RkTheme.setType('RkText', 'basic', {
  fontFamily: Fonts.Dancing,
  fontSize: 28
})

RkTheme.setType('RkButton', 'basic', {
  container: {
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: '#00BCD4'
  },
  content: {
    fontSize: 50,
    color: 'white'
  }
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default App

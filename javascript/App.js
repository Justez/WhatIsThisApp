'use strict'

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import {
  Footer,
  Header,
} from './components'

import Pages from './Pages'

const App = () =>
  <View style={ styles.container }>
    <Header />
    <Pages />
    <Footer />
  </View>

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default App

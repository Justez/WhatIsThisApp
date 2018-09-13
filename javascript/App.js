'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'

import {
  Header,
  History,
  OfflineNotice,
} from './components'

class App extends Component {

  componentDidMount() {
    // TODO: check Connection
    // TODO: render views respectively
  }

  render() {
    return (
      <View style={ styles.container }>

        <Header />
        <History />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(App)

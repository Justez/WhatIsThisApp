import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import {
  History,
  Main,
  OfflineNotice
} from './components'

class Pages extends Component {

  componentWillUpdate() {
  }

  render() {
    return (
      <View>
        <Main />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places.places
})

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages)

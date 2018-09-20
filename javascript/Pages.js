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

  getComponent = () => {
    switch (this.props.viewName) {
      case 'main':
        return <Main />
        break
      case 'favourites':
        return <Main />
        break
      case 'history':
        return <History />
        break
      default:
        return <Main />
    }
  }

  render() {
    return (
      <View>
        {this.getComponent()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places.places,
  viewName: state.views.viewSelected
})

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages)

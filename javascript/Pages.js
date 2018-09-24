import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import {
  History,
  Main,
  OfflineNotice
} from './components'

class Pages extends Component {

  // TODO: component did mount async func get records

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
  viewName: state.navigation.viewSelected
})

export default connect(mapStateToProps)(Pages)

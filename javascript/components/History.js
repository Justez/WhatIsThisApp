// TODO: render searched items and search bar / results
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Button,
  FlatList,
  View,
} from 'react-native';

import { addItem } from '../actions/history'
import HistoryItem from './HistoryItem'
import { RkTextInput, RkTheme } from 'react-native-ui-kitten'

class History extends Component {
  constructor(props) {
    super(props)

    this.state={
      itemName: '',
      items: []
    }
  }
  // TODO: reduxForm

  historySubmitHandler = () =>
    this.state.itemName.trim() !== ''
    && this.props.addItem(this.state.itemName)

  historyNameChangeHandler = (value) =>
    this.setState({ itemName: value })

  render() {
    return (
      <View style = {{ width: '100%' }}>
        <RkTextInput
          rkType= "frame"
          placeholder='Search...'
        />
        <Button title = 'Search'
          onPress = {this.historySubmitHandler}
        />
        <FlatList
          data = {this.props.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem = { info =>
            <HistoryItem
              itemName={info.item.value}
            />
          }
        />
      </View>
    )
  }
}

RkTheme.setType('RkTextInput', 'frame', {
  input: {
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
  }
})

const mapStateToProps = state => ({
  items: state.history.items
})

const mapDispatchToProps = dispatch => {
  return {
    addItem: (name) => {
      dispatch(addItem(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)

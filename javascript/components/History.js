// TODO: render searched items and search bar / results
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { addItem } from '../actions/history'
import HistoryItem from './HistoryItem'
import { RkText, RkTextInput, RkTheme } from 'react-native-ui-kitten'

class History extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.items && this.props.items.length > 0)
      return (
        <View style={{ width: '100%' }}>
          <RkTextInput
            placeholder='Search...'
            label={<Icon name={'search'}/>}
          />
          <FlatList
            data = {this.props.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(info) =>
              <HistoryItem
                itemName={info.item.value}
              />
            }
          />
        </View>
      )
    else return (
      <RkText>
        Nothing here yet!
      </RkText>
    )
  }
}

RkTheme.setType('RkTextInput', 'basic', {
  input: {
    backgroundColor: 'white',
  },
  label: {
    marginRight: 0
  },
  container: {
    paddingLeft: 10,
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

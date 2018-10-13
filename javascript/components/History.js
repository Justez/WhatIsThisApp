import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadItems, resetItems, searchItems } from '../actions/history'

import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import HistoryItem from './HistoryItem'
import { RkText, RkTextInput, RkTheme } from 'react-native-ui-kitten'

class History extends Component {
  componentDidMount() {
    this.props.loadItems()
  }

  componentWillUnmount() {
    this.props.resetItems()
  }

  search = searchValue => // TODO: add debounce ?
    // TODO: might store results in state?
    this.props.searchItems(searchValue)

  render() {
    if (this.props.itemKeys && this.props.items)
      return (
        <View style={{ width: '100%', flex: 1 }}>
          <RkTextInput
            placeholder='Search...'
            label={<Icon name={'search'}/>}
            maxLength={30}
            onChangeText={searchValue => this.search(searchValue)}
          />
          {this.props.items &&
            <FlatList
              data={this.props.items}
              keyExtractor={(item, index) => item.key}
              renderItem={(info) => <HistoryItem item={info.item}/>}
            />
          }
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
    paddingLeft: 10,
  },
  label: {
    marginRight: 0
  },
  container: {
    paddingLeft: 10,
    width: '100%',
  }
})

RkTheme.setType('RkText', 'suggestion', {
  alignSelf: 'center',
})

const mapStateToProps = state => ({
  itemKeys: state.history.itemKeys,
  items: state.history.items,
})

const mapDispatchToProps = dispatch => ({
  loadItems: () => { dispatch(loadItems()) },
  resetItems: () => { dispatch(resetItems()) },
  searchItems: (query) => { dispatch(searchItems(query)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(History)

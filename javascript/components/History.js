import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadItems, resetItems, searchItems } from '../actions/history'

import { AsyncStorage } from 'react-native'
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import HistoryItem from './HistoryItem'
import { RkText, RkTextInput, RkTheme } from 'react-native-ui-kitten'

const storage = [
  {
    description:
      '1 (one, also called unit, unity, and (multiplicative) identity) is a number, numeral, and glyph. It represents a single entity, the unit of counting or measurement. For example, a line segment of unit length is a line segment of length 1. It is also the first of the infinite sequence of natural numbers, followed by 2.',
    favourite: false,
    key: Math.random(),
    name: 'one',
    searchedAt: undefined,
    source: '',
  },
  {
    description: '2 (two) is a number, numeral, and glyph. It is the natural number following 1 and preceding 3.',
    favourite: true,
    key: Math.random(),
    name: 'two',
    searchedAt: undefined,
    source: '',
  },
  {
    description: '3 (three) is a number, numeral, and glyph. It is the natural number following 2 and preceding 4.',
    favourite: true,
    key: Math.random(),
    name: 'three',
    searchedAt: undefined,
    source: '',
  },
  {
    description: '4 (four) is a number, numeral, and glyph. It is the natural number following 3 and preceding 5.',
    favourite: false,
    key: Math.random(),
    name: 'four',
    searchedAt: undefined,
    source: '',
  },
  {
    description: '5 (five) is a number, numeral, and glyph. It is the natural number following 4 and preceding 6.',
    favourite: false,
    key: Math.random(),
    name: 'five',
    searchedAt: undefined,
    source: '',
  },
]

class History extends Component {
  componentDidMount() {
    this.props.loadItems()
    // AsyncStorage.clear()
    // AsyncStorage.multiSet(
    //   storage.map(item => [`@history:${item.key}`, JSON.stringify(item)]),
    //   (error) => console.warn(error)
    // )
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
          {this.props.items.length > 0
            ? <View style={{ width: '100%', flex: 1 }}>
                <RkTextInput
                  placeholder='Search...'
                  label={<Icon name={'search'}/>}
                  maxLength={30}
                  onChangeText={searchValue => this.search(searchValue)}
                />
                <FlatList
                  data={this.props.items}
                  keyExtractor={(item, index) => index}
                  renderItem={(info) => <HistoryItem item={info.item}/>}
                />
              </View>
            : <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <RkText rkType="suggestion">
                  Get back searching!
                </RkText>
              </View>
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
  alighSelf: 'center',
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

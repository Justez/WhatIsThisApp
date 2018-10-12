import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { addItem } from '../actions/history'
import HistoryItem from './HistoryItem'
import { RkText, RkTextInput, RkTheme } from 'react-native-ui-kitten'

class History extends Component {
  state = {
    searchValue: '',
    searchedItems: []
  }

  componentDidMount() {
    this.setState({ searchedItems: this.props.items.map((item) => ({
        key: item.key,
        value: item.value,
        description: item.description.substr(1, 100) + '...'
      }))
    })
  }

  search = searchValue => {// TODO: add debounce
    this.setState({ searchValue })
    //// TODO: promise search

    this.setState({ searchedItems: this.state.searchValue
      ? this.state.searchedItems.filter(item => item.value.includes(this.state.searchValue))
      : this.state.searchedItems
    })
  }

  render() {
    if (this.props.items && this.props.items.length > 0)
      return (
        <View style={{ width: '100%', flex: 1 }}>
          <RkTextInput
            placeholder='Search...'
            label={<Icon name={'search'}/>}
            maxLength={30}
            onChangeText={searchValue => this.search(searchValue)}
          />
          {this.state.searchedItems &&
            <FlatList
              data={this.state.searchedItems}
              keyExtractor={(item, index) => index.toString()}
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
  items: state.history.items
})

const mapDispatchToProps = dispatch => ({
  addItem: (name) => { dispatch(addItem(name)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(History)

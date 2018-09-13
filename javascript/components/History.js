// TODO: render searched items and search bar / results
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Button,
  FlatList,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import { addPlace } from '../actions/place'
import HistoryItem from './HistoryItem'

class History extends Component {
  state = {
    placeName: '',
    places: []
  }

  // TODO: reduxForm

  placeSubmitHandler = () =>
    this.state.placeName.trim() !== ''
    && this.props.addPlace(this.state.placeName)

  placeNameChangeHandler = (value) =>
    this.setState({ placeName: value })

  render() {
    return (
      <View style = { styles.inputContainer }>
      <FlatList style = { styles.historyContainer }
        data = { this.props.places }
        keyExtractor={(item, index) => index.toString()}
        renderItem = { info =>
          <HistoryItem
          placeName={ info.item.value }
          />
        }
      />
        <TextInput
          placeholder = "Search Places"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        ></TextInput>
        <Button title = 'Add Search'
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
        />

      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  historyContainer: {
  },
  placeInput: {
  },
  placeButton: {
    borderRadius: 2
  }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(History)

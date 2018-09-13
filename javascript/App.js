'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Button,
  FlatList,
  NetInfo,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ToolbarAndroid,
  View
} from 'react-native'

import { addPlace } from './actions/place'
import ListItem from './components/ListItem'

class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  componentWillMount() {
    // TODO: check connection
  }

  componentDidMount() {
    // TODO: check if passed wizzard
    // TODO: check Connection
    // TODO: render views respectively
  }

  componentWillReceiveProps(props) {
    // console.warn(props)
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.addPlace(this.state.placeName);
  }

  placeNameChangeHandler = (value) => {
    this.setState({ placeName: value })
  }

  placesOutput = () => {
    return (
      <FlatList style = { styles.listContainer }
        data = { this.props.places }
        keyExtractor={(item, index) => index.toString()}
        renderItem = { info => (
          <ListItem
            placeName={ info.item.value }
          />
        )}
      />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Search Places"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        ></TextInput>
        <Button title = 'Add'
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
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

export default connect(mapStateToProps, mapDispatchToProps)(App)

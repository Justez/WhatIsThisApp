import React from 'react'
import { AsyncStorage } from 'react-native'
import { assign, omit } from 'lodash'

export function addItem(itemName) {
  return {
    type: 'ADD_ITEM',
    payload: itemName
  }
}

export function changeItemFavourite(itemKey) {
  // TODO: send promise to change storage data
  // try {
    // AsyncStorage.setItem('@History:key', 'valueJSON', (error) => error && console.warn(error))
    //   .then(response => console.warn(response))
        // console.warn(AsyncStorage.getAllKeys())
  //   return {
  //     ...state,
  //     items:
  //     state.items.map(item => {
  //       item.key == action.payload
  //       && (item.favourite = !item.favourite)
  //       return item
  //     })
  //   }
  // } catch (error) {
    // Error saving data
  //   return state
  // }
  return {
    type: 'CHANGE_ITEM_FAVOURITE',
    payload: itemKey
  }
}

export function loadItems() {
  return async (dispatch) => {
    try {
      let payloadKeys = []
      let payload = undefined

      const result = await AsyncStorage.getAllKeys((error, keys) => {
          payloadKeys = error ? undefined : keys.filter(key => key.includes('history'))
        })
        .then(results =>
          AsyncStorage.multiGet(results, (errors, response) => {
            payload = response.map(item => {
              let value = omit(JSON.parse(item[1]), 'key')
              value.description = value.description.substring(0, 100) + '...'
              return { key: item[0], value }
            })
            // TODO: sort and pick only 10 first
          })
        )

      dispatch({
        type: 'LOAD_ITEMS',
        payloadKeys,
        payload
      })
    } catch (error) {// TODO: add error dispatch
      dispatch({
        type: 'LOAD_ITEMS'
      })
    }
  };
}

export function searchItems(query) {
  return {
    type: 'SEARCH_ITEMS',
    payload: query
  }
}

export function resetItems() {
  return {
    type: 'RESET_ITEMS'
  }
}

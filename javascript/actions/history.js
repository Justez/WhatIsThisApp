import React from 'react'
import { AsyncStorage } from 'react-native'
import { assign, omit } from 'lodash'

const descriptionLineLength = 100

export function addItem(itemName) {
  return {
    type: 'ADD_ITEM',
    payload: itemName
  }
}

export function changeItemFavourite(key) {
  return async (dispatch) => {
    try {
      let favourite = undefined
      const result = await AsyncStorage.getItem(key)
        .then(results => {
            let result = JSON.parse(results)
            favourite = !result.favourite
            result.favourite = !result.favourite
            AsyncStorage.mergeItem(key, JSON.stringify(result), (errors) =>
              errors && dispatch({
                type: 'SET_DB_CONNECTION_ERROR',
              }))
          })

      dispatch({
        type: 'CHANGE_ITEM_FAVOURITE',
        favourite,
        key,
      })
    } catch (error) {
      dispatch({ type: 'SET_DB_CONNECTION_ERROR' })
    }
  }
}

export function loadItems() {
  return async (dispatch) => {
    try {
      let payload = []

      const result = await AsyncStorage.getAllKeys()
        .then(results =>
          AsyncStorage.multiGet(results, (errors, response) => {
            payload = response.map(item => {
              let value = omit(JSON.parse(item[1]), 'key')
              value.description = value.description.substring(0, descriptionLineLength) + '...'
              return { key: item[0], value }
            })
            // TODO: sort and pick only 10 first
          })
        )

      dispatch({
        type: 'LOAD_ITEMS',
        payloadPresent: payload.length > 0,
        payload,
      })
    } catch (error) {
      dispatch({ type: 'SET_DB_CONNECTION_ERROR' })
    }
  }
}

export function searchItems(query) {
  return async (dispatch) => {
    try {
      let results = []

      const result = await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiGet(keys, (errors, response) => {
          results = response.map(result => {
            const item = JSON.parse(result[1])
            return (
              (item.name.includes(query) || item.description.includes(query))
              && { key: result[0], value: {
                ...omit(item, 'key'),
                description: item.description.substring(0, descriptionLineLength) + '...'
              }}
            )
          }).filter(item => item)
        }))

      dispatch({
        type: 'SEARCH_ITEMS',
        payload: results
      })
    } catch (error) {
      dispatch({ type: 'SET_DB_CONNECTION_ERROR' })
    }
  }
}

export function resetItems() {
  return { type: 'RESET_ITEMS' }
}

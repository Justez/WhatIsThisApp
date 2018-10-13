import React from 'react'
import { AsyncStorage } from 'react-native'
import { assign, omit } from 'lodash'

const storage = [
  {
    description:
      '1 (one, also called unit, unity, and (multiplicative) identity) is a number, numeral, and glyph. It represents a single entity, the unit of counting or measurement. For example, a line segment of unit length is a line segment of length 1. It is also the first of the infinite sequence of natural numbers, followed by 2.',
    favourite: false,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'one'
  },
  {
    description: '2 (two) is a number, numeral, and glyph. It is the natural number following 1 and preceding 3.',
    favourite: true,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'two'
  },
  {
    description: '3 (three) is a number, numeral, and glyph. It is the natural number following 2 and preceding 4.',
    favourite: true,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'three'
  },
  {
    description: '4 (four) is a number, numeral, and glyph. It is the natural number following 3 and preceding 5.',
    favourite: false,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'four'
  },
  {
    description: '5 (five) is a number, numeral, and glyph. It is the natural number following 4 and preceding 6.',
    favourite: false,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'five'
  },
]

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
          payloadKeys = error
          ? undefined
          : keys.filter(key => key.includes('history'))
        })
        .then((results) =>
          AsyncStorage.multiGet(results, (errors, response) => {
            const maps = response.map(item => ({ [item[0]]: omit(JSON.parse(item[1]), 'key') }))
            maps.length > 0 && (payload = assign({}, ...maps))
          })
        )

      dispatch({
        type: 'LOAD_ITEMS',
        payloadKeys,
        payload
      })
    } catch (error) {
      dispatch({
        type: 'LOAD_ITEMS' // TODO: add error dispatch
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

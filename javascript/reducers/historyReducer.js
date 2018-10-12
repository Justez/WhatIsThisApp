import React from 'react'

// TODO: fetch from asyncStorage
// TODO: async function to return as collection
const storage = [
  {
    description:
      '1 (one, also called unit, unity, and (multiplicative) identity) is a number, numeral, and glyph. It represents a single entity, the unit of counting or measurement. For example, a line segment of unit length is a line segment of length 1. It is also the first of the infinite sequence of natural numbers, followed by 2.'.substr(0, 100) + '...',
    favourite: false,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'one'
  },
  {
    description: '2 (two) is a number, numeral, and glyph. It is the natural number following 1 and preceding 3.'.substr(0, 100) + '...',
    favourite: true,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'two'
  },
  {
    description: '3 (three) is a number, numeral, and glyph. It is the natural number following 2 and preceding 4.'.substr(0, 100) + '...',
    favourite: true,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'three'
  },
  {
    description: '4 (four) is a number, numeral, and glyph. It is the natural number following 3 and preceding 5.'.substr(0, 100) + '...',
    favourite: false,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'four'
  },
  {
    description: '5 (five) is a number, numeral, and glyph. It is the natural number following 4 and preceding 6.'.substr(0, 100) + '...',
    favourite: false,
    key: Math.random(),
    searchedAt: undefined,
    source: '',
    value: 'five'
  },
]

const initialState = {
  itemName: '',
  itemCount: 0,
  items: [],
}

const historyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_ITEMS':
      return {
        ...state,
        itemCount: storage.length,
        items: storage.sort(function(a,b) {
            return new Date(b.date) - new Date(a.date);
          }),
      }
    case 'ADD_ITEM': // TODO: item was already in list, pick and add to top of list
      return {
        ...state,
        items: state.items.concat({
          key: Math.random(),
          source: '',
          value: action.payload
        })
      }
    case 'CHANGE_ITEM_FAVOURITE':
      // TODO: send promise to change storage data
      return {
        ...state,
        items:
          state.items.map(item => {
            item.key == action.payload
            && (item.favourite = !item.favourite)
            return item
          })
      }
    case 'RESET_ITEMS':
      return {
        ...state,
        items: []
      }
    case 'SEARCH_ITEMS':
      return {
        ...state,
        items: storage.filter(item => item.value.includes(action.payload || ""))
      }
    default:
      return state
  }
}

export default historyReducer

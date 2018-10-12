import React from 'react'
import { ADD_ITEM } from '../actions/types'

const initialState = {
  itemName: '',
  items: [
    {
      description:
        '1 (one, also called unit, unity, and (multiplicative) identity) is a number, numeral, and glyph. It represents a single entity, the unit of counting or measurement. For example, a line segment of unit length is a line segment of length 1. It is also the first of the infinite sequence of natural numbers, followed by 2.',
      key: Math.random(),
      source: '',
      value: 'one'
    },
    {
      description: '2 (two) is a number, numeral, and glyph. It is the natural number following 1 and preceding 3.',
      key: Math.random(),
      source: '',
      value: 'two'
    },
    {
      description: '3 (three) is a number, numeral, and glyph. It is the natural number following 2 and preceding 4.',
      key: Math.random(),
      source: '',
      value: 'three'
    },
    {
      description: '4 (four) is a number, numeral, and glyph. It is the natural number following 3 and preceding 5.',
      key: Math.random(),
      source: '',
      value: 'four'
    },
    {
      description: '5 (five) is a number, numeral, and glyph. It is the natural number following 4 and preceding 6.',
      key: Math.random(),
      source: '',
      value: 'five'
    },
  ]
}

const historyReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      // TODO: item was already in list, pick and add to top of list
      return {
        ...state,
        items: state.items.concat({
          key: Math.random(),
          source: '',
          value: action.payload
        })
      }
    default:
      return state
  }
}

export default historyReducer

import React from 'react'
import { ADD_ITEM } from '../actions/types'

const initialState = {
  itemName: '',
  items: [
    {key: Math.random(), value: 'one'},
    {key: Math.random(), value: 'two'},
    {key: Math.random(), value: 'three'},
    {key: Math.random(), value: 'four'},
    {key: Math.random(), value: 'five'},
  ]
}

const historyReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          key: Math.random(),
          value: action.payload
        })
      }
    default:
      return state
  }
}

export default historyReducer

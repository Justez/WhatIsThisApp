import React from 'react'
import { ADD_ITEM } from '../actions/types'

const initialState = {
  itemName: '',
  items: []
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

import React from 'react'
import { SET_VIEW } from '../actions/types'

const views = {
  '0': { name: 'main' },
  '1': { name: 'favourites' },
  '2': { name: 'history' }
}

const initialState = {
  viewSelected: views[0].name
}

const navigationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_VIEW:
      return {
        ...state,
        viewSelected: views[action.payload].name
      }
    default:
      return state
  }
}

export default navigationReducer

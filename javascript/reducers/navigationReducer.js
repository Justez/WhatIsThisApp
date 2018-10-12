import React from 'react'

const views = {
  '0': { name: 'main' },
  '1': { name: 'favourites' },
  '2': { name: 'history' }
}

const initialState = {
  viewSelected: views[2].name
}

const navigationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_VIEW':
      return {
        ...state,
        viewSelected: views[action.payload] && views[action.payload].name || 'main'
      }
    default:
      return state
  }
}

export default navigationReducer

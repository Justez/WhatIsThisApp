import React from 'react'

const initialState = {
  itemName: '',
  historyPresent: false,
  items: [],
}

const historyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_ITEMS':
      return {
        ...state,
        historyPresent: action.payloadPresent,
        items: action.payload,
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
      return {
        ...state,
        items: state.items.map(item => ({
          ...item,
          value: {
            ...item.value,
            favourite: (item.key == action.key) ? action.favourite : item.value.favourite
          }
        }))
      }
    case 'RESET_ITEMS':
      return {
        ...state,
        items: []
      }
    case 'SEARCH_ITEMS':
      return {
        ...state,
        items: action.payload
      }
    case 'SET_DB_CONNECTION_ERROR':
      return {} // TODO: finish with error notice like offline message

    default:
      return state
  }
}

export default historyReducer

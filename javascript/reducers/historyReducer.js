import React from 'react'

const initialState = {
  itemName: '',
  itemKeys: undefined,
  items: [],
}

const historyReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_ITEMS':
      return {
        ...state,
        items: action.payload,
        itemKeys: action.payloadKeys
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
        items: action.payload
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

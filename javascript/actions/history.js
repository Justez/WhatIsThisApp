import React from 'react'

export const addItem = itemName => {
  return {
    type: 'ADD_ITEM',
    payload: itemName
  }
}

export const changeItemFavourite = itemKey => {
  return {
    type: 'CHANGE_ITEM_FAVOURITE',
    payload: itemKey
  }
}

export const loadItems = () => {
  return {
    type: 'LOAD_ITEMS'
  }
}

export const searchItems = query => {
  return {
    type: 'SEARCH_ITEMS',
    payload: query
  }
}

export const resetItems = () => {
  return {
    type: 'RESET_ITEMS'
  }
}

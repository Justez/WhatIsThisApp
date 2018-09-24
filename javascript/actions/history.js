import React from 'react'

import { ADD_ITEM } from './types'

export const addItem = itemName => {
  return {
    type: ADD_ITEM,
    payload: itemName
  }
}

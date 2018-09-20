import React from 'react'

import { SET_VIEW } from './types'

export const setView = index => {
  return {
    type: SET_VIEW,
    payload: index
  }
}

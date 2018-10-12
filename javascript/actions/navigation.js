import React from 'react'

export const setView = index => {
  return {
    type: 'SET_VIEW',
    payload: index
  }
}

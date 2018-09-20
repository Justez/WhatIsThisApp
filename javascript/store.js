import React from 'react'
import { createStore, combineReducers } from 'redux'
import placeReducer from './reducers/placeReducer'
import navigationReducer from './reducers/navigationReducer'

const rootReducer = combineReducers({
  places: placeReducer,
  views: navigationReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore

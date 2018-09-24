import React from 'react'
import { createStore, combineReducers } from 'redux'
import historyReducer from './reducers/historyReducer'
import navigationReducer from './reducers/navigationReducer'

const rootReducer = combineReducers({
  history: historyReducer,
  navigation: navigationReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore

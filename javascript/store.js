import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import historyReducer from './reducers/historyReducer'
import navigationReducer from './reducers/navigationReducer'

const rootReducer = combineReducers({
  history: historyReducer,
  navigation: navigationReducer
})

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
  )
}

export default configureStore

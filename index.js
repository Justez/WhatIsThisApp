import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'

import App from './javascript/App'
import configureStore from './javascript/store'

const store = configureStore()

const RNRedux = () =>
  <Provider store = { store }>
    <App />
  </Provider>

AppRegistry.registerComponent('WhatIsThisApp', () => RNRedux )

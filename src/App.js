import React, { Component } from 'react'
import './App.css'

import configureStore from './store'
import addDeposit, { ADD_DEPOSIT } from './actions'

const store = configureStore()

store.dispatch(addDeposit())

console.log(store.getState())

class App extends Component {
  render() {
    return null
  }
}

export default App

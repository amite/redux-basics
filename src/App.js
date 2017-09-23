import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import configureStore from './store'

const store = configureStore()

console.log(store.getState())

class App extends Component {
  render() {
    return null
  }
}

export default App

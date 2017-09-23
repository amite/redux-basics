import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import reducer from './reducers'

const loggerMiddleware = createLogger()

const configureStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(loggerMiddleware))
  )
  return store
}

export default configureStore

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

const DEFAULT_DEPOSIT_AMOUNT = 2000
const DEFAULT_EXPENSE_AMOUNT = 500
const DEFAULT_BALANCE_AMOUNT = 2300

const initialState = {
  data: {
    currentBalance: DEFAULT_BALANCE_AMOUNT,
    transactions: []
  },
  form: {
    note: '',
    deposit: DEFAULT_DEPOSIT_AMOUNT,
    spend: DEFAULT_EXPENSE_AMOUNT,
    date: new Date(),
    isValid: false
  },
  ui: {
    isActive: false,
    message: '',
    isLoading: false
  }
}

const reducer = () => {
  return initialState
}

const loggerMiddleware = createLogger()

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(loggerMiddleware))
  return store
}

export default configureStore

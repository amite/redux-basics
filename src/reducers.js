import { ADD_DEPOSIT } from './actions'

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEPOSIT:
      return {
        ...state,
        data: {
          ...state.data,
          currentBalance: state.data.currentBalance + action.payload
        }
      }
    default:
      return state
  }
}

export default reducer

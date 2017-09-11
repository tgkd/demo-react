import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import * as reducers from './reducers'

const history = createHistory()

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer,
  form: formReducer,
})

const logger = createLogger()
const routerMid = routerMiddleware(history)

const initialState = {
  cart: [],
  products: [],
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger, thunk, routerMid))

export default {
  store,
  history,
}

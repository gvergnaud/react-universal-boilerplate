import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router'
import counter from './counter'
import starwarsCharacters from './starwarsCharacters'

const rootReducer = combineReducers({
  routing,
  counter,
  starwarsCharacters
})

export default rootReducer

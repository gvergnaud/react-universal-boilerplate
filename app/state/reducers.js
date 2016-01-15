import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router'
import counter from './modules/counter'
import starwarsCharacters from './modules/starwarsCharacters'

const rootReducer = combineReducers({
  routing,
  counter,
  starwarsCharacters
})

export default rootReducer

import { combineReducers } from 'redux'
// import counter from './counter'
import user from './user.js'
import shoppingItemer from './shoppingitem'
export default combineReducers({
  user,
  shoppingItemer
})

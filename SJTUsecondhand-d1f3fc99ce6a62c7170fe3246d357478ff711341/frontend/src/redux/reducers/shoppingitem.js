import { GET_SHOPPINGITEM_INFO_SUCCESS } from '../constants/ActionTypes'

const initialState = {
  shoppingItemInfo: {}
}

export default function shoppingItemer (state = initialState, action) {
  switch (action.type) {
    case GET_SHOPPINGITEM_INFO_SUCCESS:
      let info = JSON.parse(action.info)
      console.log(info)
      return {
        shoppingItemInfo: info[0]
      }
    default:
      return state
  }
}

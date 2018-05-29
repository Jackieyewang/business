import { LOG_IN } from '../constants/ActionTypes'

const initialState = {
  user: []
}

export default function counter (state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { count: state.count + 1 }
    default:
      return state
  }
}

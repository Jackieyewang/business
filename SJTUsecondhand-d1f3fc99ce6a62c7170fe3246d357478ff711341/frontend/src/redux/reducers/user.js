import { LOG_IN, SIGN_IN, ADD_TO_CART, REMOVE_IN_CART, CHANGE_ADDRESS, MAKE_ORDER_SUCCESS } from '../constants/ActionTypes'

const initialState = {
  userProps: {},
  signinProps: false,
  loginProps: false,
  shoppingCartItem: []
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      state = {
        ...state
      }
      // console.log(action)
      let user = {
        userName: action.loginProps.username,
        id: action.loginProps.id,
        email: action.loginProps.email,
        money: action.loginProps.money,
        address: action.loginProps.address,
        isLogin: true
      }
      // console.log(user)
      return {
        ...state,
        userProps: user,
        signinProps: false,
        loginProps: true
      }
    case SIGN_IN:
      state = {
        ...state
      }
      return {
        ...state,
        userProps: {},
        signinProps: true,
        loginProps: false
      }
    case ADD_TO_CART:
      state = {
        ...state
      }
      let shoppingCartItem = state.shoppingCartItem
      let flag = true
      for (let i in state.shoppingCartItem) {
        if (state.shoppingCartItem[i].item_id === action.addProps.item_id) {
          flag = false
          break
        }
      }
      if (flag) {
        shoppingCartItem.push(action.addProps)
      }
      // console.log(shoppingChartItem, action)
      return {
        ...state,
        shoppingCartItem
      }
    case REMOVE_IN_CART:
      state = {
        ...state
      }
      shoppingCartItem = state.shoppingCartItem
      let newShoppingCartItem = []
      for (let i = 0; i < shoppingCartItem.length; i++) {
        if (i === action.removeItem) continue
        else newShoppingCartItem.push(shoppingCartItem[i])
      }
      return {
        ...state,
        shoppingCartItem: newShoppingCartItem
      }
    case MAKE_ORDER_SUCCESS:
      state = {
        ...state
      }
      console.log(action.info)
      let sum = 0
      let info = JSON.parse(action.info)
      for (let i in info.shoppingCartItem) {
        sum += info.shoppingCartItem[i].price
      }
      let money = state.userProps.money - sum
      console.log(money)
      let userProps = {
        userName: state.userProps.userName,
        id: state.userProps.id,
        email: state.userProps.email,
        money: money,
        address: action.info,
        isLogin: true
      }
      console.log(user)
      return {
        ...state,
        userProps: userProps
      }
    case CHANGE_ADDRESS:
      state = {
        ...state
      }
      user = {
        userName: state.userProps.userName,
        id: state.userProps.id,
        email: state.userProps.email,
        money: state.userProps.money,
        address: state.userProps.address,
        isLogin: true
      }
      console.log(user)
      return {
        ...state,
        userProps: user
      }
    default:
      return state
  }
}

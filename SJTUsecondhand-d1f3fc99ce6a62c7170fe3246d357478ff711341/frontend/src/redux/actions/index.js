import * as types from '../constants/ActionTypes'
import {notification} from 'antd'
import $ from 'jquery'

// export const increment = () => ({ type: types.INCREMENT })
export const login = (loginProps) => ({
  type: types.LOG_IN,
  loginProps
})
export const signin = () => ({
  type: types.SIGN_IN
})
const getShoppingItemInfoSuccess = (info) => ({
  type: types.GET_SHOPPINGITEM_INFO_SUCCESS,
  info
})
const makeOrderSuccess = (info) => ({
  type: types.MAKE_ORDER_SUCCESS,
  info
})
export const getShoppingItemInfo = (id) => {
  // type: types.GET_SHOPPINGITEM_INFO,
  // id
  let result = ''
  let url = 'http://120.79.186.162:3001/shoppingitem/' + id
  // let url = 'http://localhost:3001/shoppingitem/' + 'id'
  return dispath => {
    return $.ajax({
      type: 'POST',
      url: url,
      data: id,
      success: (data) => {
        result = data
        console.log(result)

        dispath(
          getShoppingItemInfoSuccess(result)
        )
      },
      error: () => {
        // dispath(
        //   showTFFailed()
        // )
        console.log('error')
        // $('#loading').remove()
        notification['error']({
          message: 'ERROR',
          description: 'Failed to load!'
        })
      },
      dataType: 'text'
    })
  }
}
export const addToCart = (addProps) => ({
  type: types.ADD_TO_CART,
  addProps
})
export const removeInCart = (removeItem) => ({
  type: types.REMOVE_IN_CART,
  removeItem
})

export const makeOrder = (props) => {
  // type: types.GET_SHOPPINGITEM_INFO,
  // id
  let item = {
    shoppingCartItem: props.shoppingCartItem,
    money: props.money
  }
  let id = props.id
  let result = ''
  item = JSON.stringify(item)
  let url = 'http://120.79.186.162:3001/makeOrder/' + id
  console.log('item', item)
  // let url = 'http://localhost:3001/shoppingitem/' + 'id'
  return dispath => {
    dispath(
      makeOrderSuccess(item)
    )
    return $.ajax({
      type: 'POST',
      url: url,
      data: item,
      success: (data) => {
        result = data
        console.log(result)
      },
      error: () => {
        // dispath(
        //   showTFFailed()
        // )
        console.log('error')
        // $('#loading').remove()
        notification['error']({
          message: 'ERROR',
          description: 'Failed to load!'
        })
      },
      dataType: 'text'
    })
  }
}
export const changeAddress = (props) => {
  // type: types.GET_SHOPPINGITEM_INFO,
  // id
  let item = props.address
  let id = props.id
  item = JSON.stringify(item)
  let url = 'http://120.79.186.162:3001/changeaddress/' + id
  console.log(props)
  // let url = 'http://localhost:3001/shoppingitem/' + 'id'
  return dispath => {
    return $.ajax({
      type: 'POST',
      url: url,
      data: item,
      success: (data) => {
        console.log('address change')

        dispath(
          changeAddressSuccess(item)
        )
      },
      error: () => {
        // dispath(
        //   showTFFailed()
        // )
        console.log('error')
        // $('#loading').remove()
        notification['error']({
          message: 'ERROR',
          description: 'Failed to load!'
        })
      },
      dataType: 'text'
    })
  }
}
const changeAddressSuccess = (info) => ({
  type: types.CHANGE_ADDRESS,
  info
})
export const publish = (props) => {
  // type: types.GET_SHOPPINGITEM_INFO,
  // id
  let item = props
  let id = props.id
  item = JSON.stringify(item)
  let url = 'http://120.79.186.162:3001/publish/' + id
  console.log(props, url)
  // let url = 'http://localhost:3001/shoppingitem/' + 'id'
  return dispath => {
    return $.ajax({
      type: 'POST',
      url: url,
      data: item,
      success: (data) => {
        dispath(
          publishSuccess(item)
        )
      },
      error: () => {
        // dispath(
        //   showTFFailed()
        // )
        console.log('error')
        // $('#loading').remove()
        notification['error']({
          message: 'ERROR',
          description: 'Failed to load!'
        })
      },
      dataType: 'text'
    })
  }
}
const publishSuccess = (info) => ({
  type: types.PUBLISH_SUCCESS,
  info
})

import * as actions from '../actions/cart'
import cart from '../../libs/cart'


export function saveCart(cartItems) {
  return async (dispatch) => {
    const response = await cart.set(cartItems)
    dispatch(actions.saveCart(response.data))
  }
}

export function getCart(userId) {
  return async (dispatch) => {
    const response = await cart.get(userId)
    dispatch(actions.getCart(response))
  }
}

export function addToCart(productInfo) {
  return async (dispatch) => {
    const response = await cart.addToCart(productInfo)
    dispatch(actions.addToCart(response))
  }
}

export function removeFromCart(productId) {
  return async (dispatch) => {
    const response = await cart.removeFromCart(productId)
    dispatch(actions.removeFromCart(response))
  }
}

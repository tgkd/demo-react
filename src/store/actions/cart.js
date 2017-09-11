import * as actions from '../constants/cart'

export function getCart(cartItems) {
  return {
    type: actions.getCart,
    payload: cartItems,
  }
}

export function saveCart(cartItems) {
  return {
    type: actions.saveCart,
    payload: cartItems,
  }
}

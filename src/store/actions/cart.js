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

export function addToCart(newCartItem) {
  return {
    type: actions.addToCart,
    payload: newCartItem,
  }
}

export function removeFromCart(itemId) {
  return {
    type: actions.removeFromCart,
    payload: itemId,
  }
}

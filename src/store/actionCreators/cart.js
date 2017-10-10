import * as actions from '../actions/cart'
import cart from '../../libs/cart'


export function saveCart(cartItems) {
  return (dispatch) => dispatch(actions.saveCart(cart.set(cartItems)))
}

export function getCart(userId) {
  return (dispatch) => dispatch(actions.getCart(cart.get(userId)))
}

export function addToCart(productInfo) {
  return (dispatch) => dispatch(actions.addToCart(cart.addToCart(productInfo)))
}

export function removeFromCart(productId) {
  return async (dispatch) => dispatch(actions.removeFromCart(cart.removeFromCart(productId)))
}

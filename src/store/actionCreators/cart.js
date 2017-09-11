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
    dispatch(actions.getCart(response.data))
  }
}

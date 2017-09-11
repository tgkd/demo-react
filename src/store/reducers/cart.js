import * as actions from '../constants/cart'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.getCart:
      return { ...action.payload }
    default:
      return state
  }
}

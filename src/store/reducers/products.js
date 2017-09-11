import * as actions from '../constants/products'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.getProducts:
      return { ...action.payload }
    default:
      return state
  }
}

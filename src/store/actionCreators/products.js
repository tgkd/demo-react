import * as actions from '../actions/products'
import products from '../../libs/products'

export function getProductsList() {
  return (dispatch) => {
    const list = products.get()
    dispatch(actions.getProductsList(list))
  }
}

export function addProduct(newProduct) {
  return (dispatch) => {
    products.addNewProduct(newProduct)
    dispatch(actions.addNewProduct(newProduct))
  }
}

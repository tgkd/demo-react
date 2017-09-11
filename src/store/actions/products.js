import * as actions from '../constants/products'

export function getProductsList(productsList) {
  return {
    type: actions.getProducts,
    payload: productsList,
  }
}

export function addNewProduct(product) {
  return {
    type: actions.getProducts,
    payload: product,
  }
}


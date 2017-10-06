import info from './data'

export default class Products {
  static get() {
    return info.productsList
  }
  static addNewProduct(newProduct) {
    info.productsList.push(newProduct)
    return info.productsList
  }
}

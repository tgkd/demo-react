import info from './data'

export default class Cart {
  static get() {
    return info.cartInfo
  }

  static addToCart(newProduct) {
    info.cartInfo.push(newProduct)
    return info.cartInfo
  }
}

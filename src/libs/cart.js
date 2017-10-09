import info from './data'

export default class Cart {
  static get() {
    return info.cartInfo
  }

  static addToCart(newProduct) {
    const product = info.productsList.filter((item) => (
      item.id === newProduct
    ))
    info.cartInfo = info.cartInfo.forEach((item) => {
        if (newProduct === item.id) {
            
        }
      })

    if (product) {
        if (sameItemInCart.length) {
            info.cartInfo = []
        }
    }
    return info.cartInfo
  }

  static removeFromCart(productId) {
    info.cartInfo.filter((item) => (
      item.id !== productId
    ))
    return productId
  }
}

import info from './data'

export default class Cart {
  static get() {
    return info.cartInfo
  }

  static addToCart(newProduct) {
    let listIsUpdated = false
    const productById = info.productsList
      .filter((item) => (item.id === newProduct))

    info.cartInfo = info.cartInfo.map((item) => {
      if (newProduct === item.id) {
        const count = item.count ? parseInt(item.count, 10) + 1 : 2
        listIsUpdated = true
        return { ...item, count }
      }
      return item
    })
    if (!listIsUpdated) info.cartInfo.push(productById[0])
    return info.cartInfo
  }

  static removeFromCart(productId) {
    info.cartInfo = info.cartInfo.filter((item) => {
      console.log(item)
      return item.id !== productId
    })
    return info.cartInfo
  }
}

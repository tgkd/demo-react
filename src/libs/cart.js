import info from './data'

export default class Cart {
  static get() {
    return info.cartInfo
  }

  static set(newData) {
    info.cartInfo = newData
    return true
  }
}

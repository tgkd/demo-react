/* eslint-disable */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../store/actionCreators/cart'

import Cart from '../../components/Cart'

@connect(
  ({ cart }) => ({ cart }),
  (dispatch) => bindActionCreators(actions, dispatch),
)
class CartContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { saveCart, removeFromCart } = this.props
    const cartItems = this.props.cart
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(cartItems)
    return (
      <div className="content">
        <Cart
          cartItems={ cartItems }
          removeFromCart={ removeFromCart }
        />
      </div>
    )
  }
}

export default CartContainer


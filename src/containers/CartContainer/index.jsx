/* eslint-disable react/prop-types,no-useless-constructor */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../store/actionCreators/cart'

import Cart from '../../components/Cart'

@connect(
  ({ cartItems }) => ({ cartItems }),
  (dispatch) => bindActionCreators(actions, dispatch),
)

class CartContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { getCartItems, saveCart } = this.props
    const cartItems = this.props.cartItems
    return (
      <div className="content">
        <Cart
          getCartItems={getCartItems}
          savecart={saveCart}
          cartItems={cartItems}
        />
      </div>
    )
  }
}

export default CartContainer


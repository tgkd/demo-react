/* eslint-disable react/prop-types,no-useless-constructor */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as productsActions from '../../store/actionCreators/products'
import * as cartActions from '../../store/actionCreators/cart'

import ProductsList from '../../components/ProductsList'
import Sidebar from '../../components/Sidebar'

@connect(
  ({ products }) => ({ products }),
  (dispatch) => bindActionCreators({ ...productsActions, ...cartActions }, dispatch))
export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { getProductsList, products, addToCart } = this.props

    return (
      <div>
        <Sidebar />
        <ProductsList
          addToCart={addToCart}
          products={products}
          getProductsList={getProductsList}
        />
      </div>
    )
  }
}


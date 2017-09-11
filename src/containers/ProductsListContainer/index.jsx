/* eslint-disable react/prop-types,no-useless-constructor */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../store/actionCreators/products'

import ProductsList from '../../components/ProductsList'

@connect(
  ({ products }) => ({ products }),
  (dispatch) => bindActionCreators(actions, dispatch))
export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { getProductsList, products } = this.props

    return (
      <ProductsList products={products} getProductsList={getProductsList} />
    )
  }
}


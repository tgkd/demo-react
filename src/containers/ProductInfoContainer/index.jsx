/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../store/actionCreators/products'

import ProductInfo from '../../components/ProductInfo'

@connect(
  () => ({}),
  (dispatch) => bindActionCreators(actions, dispatch),
)

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ProductInfo />
    )
  }
}

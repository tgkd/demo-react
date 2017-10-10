/* eslint-disable react/no-did-mount-set-state,react/prop-types,react/jsx-no-bind */
import React from 'react'
import { Link } from 'react-router-dom'
import './index.styl'
import Product from '../Product'
import Button from '../Buttons/Button'
import ButtonAdd from '../Buttons/ButtonAdd'

class ProductsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productCardStyle: 'cell',
      products: [],
    }
  }

  componentDidMount() {
    this.props.getProductsList()
  }

  getProductsGridTemplate() {
    const list = Object.values(this.props.products)
    if (list) {
      return list.map((product) => {
        const style = this.state.productCardStyle
        return (
          <Product key={product.id} displayType={style}>
            {product.description}
            <ButtonAdd onClick={this.addToCart.bind(this, product.id)}>add</ButtonAdd>
          </Product>
        )
      })
    }
    return null
  }

  addToCart = (id) => {
    this.props.addToCart(id)
  }

  switchListStyle = () => {
    this.setState({
      productCardStyle: this.state.productCardStyle === 'row'
        ? 'cell'
        : 'row',
    })
  }

  render() {
    const productsGrid = this.getProductsGridTemplate()
    return (
      <div>
        <Button onClick={this.switchListStyle}>{this.state.productCardStyle}</Button>
        <Link className="button-link" to="/cart">
          <Button>
            Cart { this.props.productsInCart }
          </Button>
        </Link>
        <div className="products-list">
          { productsGrid }
        </div>
      </div>

    )
  }
}

export default ProductsList

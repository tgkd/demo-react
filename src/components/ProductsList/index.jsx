/* eslint-disable react/no-did-mount-set-state,react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './index.styl'
import Product from '../Product'
import Button from '../Button/index'
import ButtonAdd from '../ButtonAdd/index'

class ProductsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productCardStyle: 'cell',
      products: [],
    }
    this.switchListStyle = this.switchListStyle.bind(this)
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
            <ButtonAdd onClick="">add to cart</ButtonAdd>
          </Product>
        )
      })
    }
    return null
  }

  switchListStyle() {
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

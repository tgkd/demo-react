/* eslint-disable */
import React from 'react'
import ContactForm from '../ContactForm'
import Calendar from '../Calendar'
import CartList from '../CartList'
import './index.styl'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(values) {
    this.setState({
      data: values,
    })
  }

  render() {
    return (
      <div className="cart-container">
        <h2 className="cart-container__title">Your cart</h2>
        <CartList items={ this.props.cartItems } removeFromCart={ this.props.removeFromCart } />
        <ContactForm onSubmit={ this.submitForm } />
      </div>
    )
  }
}

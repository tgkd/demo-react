/* eslint-disable */
import React from 'react'
import ContactForm from '../ContactForm'
// import Calendar from '../Calendar'

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
      <div>
        <p>Your cart</p>
        <CartList items={this.props.cartItems} />
        <ContactForm onSubmit={this.submitForm} />
      </div>
    )
  }
}

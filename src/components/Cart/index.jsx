import React from 'react'
import ContactForm from '../ContactForm'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.list = []
  }

  submitForm(values) {
    const val = this.list
    console.log(val)
    console.log(values)
  }

  render() {
    return (
      <div>
        <p>text</p>
        <ContactForm onSubmit={this.submitForm} />
      </div>
    )
  }
}

import React from 'react'
import ContactForm from '../ContactForm'
import Calendar from '../Calendar'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'test',
    }
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
        <p>text</p>
        <Calendar />
        <ContactForm onSubmit={this.submitForm} />
      </div>
    )
  }
}

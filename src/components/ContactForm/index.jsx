/* eslint-disable react/prop-types,import/no-mutable-exports,jsx-a11y/label-has-for */
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './index.css'
import ButtonSubmit from '../ButtonSubmit'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
)

let ContactForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Field className="contact-form__name" name="name" type="text" component={renderField} label="Your name" />
      <Field className="contact-form__email" name="email" type="email" component={renderField} label="Email" />
      <Field className="contact-form__phone" name="phone" type="text" component={renderField} label="Phone" />
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact',
  validate,
})(ContactForm)

export default ContactForm

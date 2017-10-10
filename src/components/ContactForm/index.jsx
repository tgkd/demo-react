/* eslint-disable react/prop-types,import/no-mutable-exports,jsx-a11y/label-has-for */
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './index.styl'
import ButtonSubmit from '../Buttons/ButtonSubmit'

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
      <div className="contact-form__name">
        <Field name="name" type="text" component={renderField} label="Your name" />
      </div>
      <div className="contact-form__email">
        <Field name="email" type="email" component={renderField} label="Email" />
      </div>
      <div className="contact-form__phone">
        <Field name="phone" type="text" component={renderField} label="Phone" />
      </div>
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact',
  validate,
})(ContactForm)

export default ContactForm

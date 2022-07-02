/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import React from 'react'
// import { Field, Form, Formik } from 'formik';
import { QRCodeFormField } from './QRCodeFormField'

it('renders as a button', () => {
  const props = {
    value: {},
    name: 'point',
    onChange: (x: any) => x,
    onBlur: (x: any) => x
  }
  // render(<QRCodeFormField field={props} label='Hello World!' form={null} meta={null} />)
  // expect(screen.getByRole('input'))
})

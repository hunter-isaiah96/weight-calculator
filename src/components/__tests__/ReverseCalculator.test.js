import React from 'react'
import ReactDom from 'react-dom'
import { ReverseCalculator } from '..'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

afterEach(cleanup)

it('clicking a weight adds to weight display', () => {
  const { getByTestId } = render(<ReverseCalculator></ReverseCalculator>)
  fireEvent.click(getByTestId('add-plate0'))
  fireEvent.click(getByTestId('add-plate0'))

  expect(getByTestId('plate0')).toHaveTextContent('45')
  expect(getByTestId('plate1')).toHaveTextContent('45')
})

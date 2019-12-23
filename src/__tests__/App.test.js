import React from 'react'
import ReactDom from 'react-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import App from '../App'

afterEach(cleanup)

it('Swaps between components after clicking a navigation item', () => {
  const { getByTestId, queryAllByTestId } = render(<App></App>)
  fireEvent.click(queryAllByTestId('navigation-reverse-calculator-item')[0])
  getByTestId('reverse-calculator')
  fireEvent.click(queryAllByTestId('navigation-calculator-item')[0])
  getByTestId('reverse-calculator')
})

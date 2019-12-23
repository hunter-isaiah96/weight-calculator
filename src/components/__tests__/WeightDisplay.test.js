import React from 'react'
import ReactDom from 'react-dom'
import { WeightDisplay } from '..'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

const loadedPlates = []
const weightDisplay = (
  <WeightDisplay loadedPlates={loadedPlates} barbell={45}></WeightDisplay>
)

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(weightDisplay, div)
})

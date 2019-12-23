import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { WeightDisplay } from './'
import { barBell, findPlates, defaultWeightSet } from '../Utilities'

const Calculator = () => {
  const [weightInput, setWeightInput] = useState('')
  const [loadedPlates, setLoadedPlates] = useState([])
  const availablePlates = defaultWeightSet
  const loadTotal = loadedPlates.reduce((a, b) => a + b * 2, barBell)

  const handleWeightInputChange = e => {
    if (e.target.value.length > 4) return
    setWeightInput(e.target.value)
    setLoadedPlates(
      findPlates(
        e.target.value > Math.max(...availablePlates) + barBell * 9 * 2
          ? Math.max(...availablePlates) + barBell * 9 * 2
          : e.target.value,
        availablePlates
      )
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <WeightDisplay
        barbell={barBell}
        loadedPlates={loadedPlates}
      ></WeightDisplay>
      <TextField
        id='weight'
        type='number'
        value={weightInput}
        onChange={handleWeightInputChange}
        label='Enter Weight'
        helperText={`Total Load: ${loadTotal}LBS | ${Math.round(
          loadTotal / 2.205
        )} KG `}
        variant='outlined'
        fullWidth
      />
    </div>
  )
}

export default Calculator

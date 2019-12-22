import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { WeightDisplay } from './'

const Calculator = () => {
  const [weight, setWeight] = useState('')
  const [loadedPlates, setloadedPlates] = useState([])
  const barbell = 45
  const availablePlates = [45, 35, 25, 10, 5, 2.5]
  const loadTotal = loadedPlates.reduce((a, b) => a + b * 2, barbell)

  const handleWeightChange = e => {
    if (e.target.value.length > 4) return
    setWeight(e.target.value)
    setloadedPlates(
      findPlates(
        e.target.value > availablePlates[0] + barbell * 9 * 2
          ? availablePlates[0] + barbell * 9 * 2
          : e.target.value,
        availablePlates
      )
    )
  }

  const findPlates = (weight, weightsAvailable) => {
    let plates = []
    let left = weight - barbell
    while (left > 0) {
      let foundOne = false
      for (let i = 0; i < weightsAvailable.length; i++) {
        let amount = weightsAvailable[i] * 2
        if (amount <= left) {
          left -= amount
          plates.push(weightsAvailable[i])
          foundOne = true
          break
        }
      }
      if (!foundOne) break
    }
    return plates
  }

  return (
    <div style={{ width: '100%' }}>
      <WeightDisplay
        barbell={barbell}
        loadedPlates={loadedPlates}
      ></WeightDisplay>
      <TextField
        id='weight'
        type='number'
        value={weight}
        onChange={handleWeightChange}
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

import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { WeightDisplay } from './'

const Calculator = () => {
  const [weight, setWeight] = useState('')
  const [barbell] = useState(45)
  const [weights] = useState([45, 35, 25, 10, 5, 2.5])
  const [loadedWeights, setLoadedWeights] = useState([])
  const loadTotal = loadedWeights.reduce((a, b) => a + b * 2, barbell)

  const handleWeightChange = e => {
    if (e.target.value.length > 4) return
    setWeight(e.target.value)
    setLoadedWeights(
      findPlates(
        e.target.value > weights[0] + barbell * 9 * 2
          ? weights[0] + barbell * 9 * 2
          : e.target.value
      )
    )
  }

  const findPlates = weight => {
    let plates = []
    let left = weight - barbell
    while (left > 0) {
      let foundOne = false
      for (let i = 0; i < weights.length; i++) {
        let amount = weights[i] * 2
        if (amount <= left) {
          left -= amount
          plates.push(weights[i])
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
      <WeightDisplay barbell={barbell} weights={loadedWeights}></WeightDisplay>
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

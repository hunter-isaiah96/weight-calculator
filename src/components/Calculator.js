import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { WeightDisplay } from './'
const useStyles = makeStyles(theme => ({
  form: {
    width: '100%'
  }
}))

const Calculator = () => {
  const classes = useStyles()

  const [weight, setWeight] = useState('')
  const [barbell] = useState(45)
  const [weights] = useState([45, 35, 25, 10, 5, 2.5])
  const [loadedWeights, setLoadedWeights] = useState([])

  const handleWeightChange = e => {
    if (e.target.value.length > 4) return
    setWeight(e.target.value)
    setLoadedWeights(
      findPlates(
        e.target.value > weights[0] * 9 * 2
          ? weights[0] * 9 * 2
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
    <form className={classes.form} noValidate autoComplete='off'>
      <WeightDisplay barbell={barbell} weights={loadedWeights}></WeightDisplay>
      <TextField
        id='weight'
        type='number'
        value={weight}
        onChange={handleWeightChange}
        label='Enter Weight'
        helperText={`Weight Loaded: ${loadedWeights.reduce(
          (a, b) => a + b * 2,
          barbell
        )}`}
        variant='outlined'
        fullWidth
      />
    </form>
  )
}

export default Calculator

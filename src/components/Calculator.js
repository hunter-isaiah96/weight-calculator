import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  form: {
    width: '100%'
  }
}))

const Calculator = () => {
  const classes = useStyles()

  const [weight, setWeight] = React.useState('Balls')
  const [barbell] = React.useState(45)
  const [weights] = React.useState([55, 45, 35, 25, 10, 5, 2.5])

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
      <TextField
        id='weight'
        label='Enter Weight'
        variant='outlined'
        value={weight}
        fullWidth
      />
    </form>
  )
}

export default Calculator

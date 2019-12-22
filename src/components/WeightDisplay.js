import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors'

const WeightDisplay = props => {
  const classes = makeStyles(theme => ({
    root: {
      height: 300,
      maxWidth: 550,
      position: 'relative',
      margin: '0 auto'
    },
    plate: {
      display: 'flex',
      width: '8%',
      marginRight: '2%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      fontWeight: 600
    },
    bar: {
      position: 'absolute',
      zIndex: -1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '105%',
      height: 15,
      backgroundColor: blueGrey[500],
      borderRadius: 50
    }
  }))()
  return (
    <Grid
      className={classes.root}
      direction='row'
      justify='flex-start'
      alignItems='center'
      container
    >
      <Box className={classes.bar}></Box>
      <Box
        width='8%'
        marginRight='2%'
        className={classes.plate}
        height={60}
        bgcolor={blueGrey[500]}
        boxShadow={2}
      >
        {props.barbell}
      </Box>
      {props.weights.map((plate, index) => {
        return (
          <Box
            className={classes.plate}
            height={25 + plate * 4}
            bgcolor='primary.main'
            boxShadow={2}
          >
            {plate}
          </Box>
        )
      })}
    </Grid>
  )
}

export default WeightDisplay

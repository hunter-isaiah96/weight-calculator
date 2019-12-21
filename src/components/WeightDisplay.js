import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import posed, { PoseGroup } from 'react-pose'
import { blueGrey } from '@material-ui/core/colors'

const Plate = posed.div({
  enter: {
    height: ({ plateHeight }) => (plateHeight > 50 ? plateHeight : 50),
    originX: '50%',
    originY: '50%',
    scaleY: 1
  },
  exit: {
    height: ({ plateHeight }) => (plateHeight > 50 ? plateHeight : 50),
    originX: '50%',
    originY: '50%',
    scaleY: 0
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    height: 300,
    position: 'relative'
  },
  plate: {
    display: 'flex',
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontWeight: 600,
    marginRight: 10
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
}))

const WeightDisplay = props => {
  const classes = useStyles()
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
        className={classes.plate}
        minWidth={45}
        height={60}
        bgcolor={blueGrey[500]}
        boxShadow={2}
      >
        {props.barbell}
      </Box>
      <PoseGroup>
        {props.weights.map((plate, index) => {
          return (
            <Plate key={index} plateHeight={25 + plate * 4}>
              <Box
                className={classes.plate}
                height='100%'
                bgcolor='primary.main'
                boxShadow={2}
              >
                {plate}
              </Box>
            </Plate>
          )
        })}
      </PoseGroup>
    </Grid>
  )
}

export default WeightDisplay

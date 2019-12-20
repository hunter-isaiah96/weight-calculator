import React, { Component } from 'react'
import { Fab, Grid, GridList, Chip, Box } from '@material-ui/core'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
// import Button from '@material-ui/core/Button'
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: [],
      totalWeight: 0,
      availablePlates: [45, 35, 25, 10, 5, 2.5, 1],
      barbell: 45
    }
  }

  render() {
    // const theme = useTheme();
    return (
      <Grid
        className='wrapper'
        item
        direction='column'
        justify='center'
        container
      >
        <Grid className='weight-display' direction='row' container>
          <Box
            className='barbell'
            position='absolute'
            top='50%'
            left='50%'
            width='105%'
            height={15}
            bgcolor='primary.barbell'
            zIndex='-1'
            borderRadius={5}
          />
          <Box
            width='100%'
            display='flex'
            flexDirection='row'
            alignItems='center'
            color='white'
            fontWeight='fontWeightBold'
          >
            <Box
              className='plate'
              border={5}
              borderColor='background.default'
              bgcolor='primary.barbell'
              height={60}
            >
              {this.state.barbell}
            </Box>
            {this.state.loaded.map((plate, index) => {
              return (
                <Box
                  className='plate'
                  bgcolor='primary.main'
                  height={30 + plate * 4}
                  color='primary'
                  key={index}
                >
                  {plate}
                </Box>
              )
            })}
          </Box>
        </Grid>
        <Grid direction='row' justify='center' container item>
          <Chip
            icon={<FitnessCenterIcon />}
            variant='outlined'
            color='primary'
            label={`${
              this.state.totalWeight !== 0
                ? this.state.totalWeight
                : this.state.barbell
            } LBS loaded`}
            style={{ marginBottom: 30 }}
          />
        </Grid>

        <GridList cellHeight={70} cols={12}>
          {this.state.availablePlates.map((plate, index) => {
            return (
              <Grid
                container
                justify='center'
                alignItems='center'
                cols={4}
                key={index}
              >
                <Fab
                  color='primary'
                  aria-label={`add ${plate}lbs`}
                  onClick={this.addPlate.bind(this, plate)}
                >
                  {plate}
                </Fab>
              </Grid>
            )
          })}
        </GridList>
      </Grid>
    )
  }
  addPlate(plate) {
    this.setState(previousState => {
      // if (previousState.loaded.length === 9) return
      let loaded = [...previousState.loaded, plate]
      let totalWeight = loaded.reduce((a, b) => a + b * 2, this.state.barbell)

      return {
        loaded,
        totalWeight
      }
    })
  }
}

export default Counter

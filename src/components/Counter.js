import React, { Component } from 'react'
import { Fab, Grid, GridList, Chip, Box, IconButton } from '@material-ui/core'
import { FitnessCenterSharp, Refresh } from '@material-ui/icons'
import posed, { PoseGroup } from 'react-pose'

// import Button from '@material-ui/core/Button'
class Counter extends Component {
  state = {
    loaded: [],
    totalWeight: 0,
    availablePlates: [55, 45, 35, 25, 10, 5, 2.5, 1],
    barbell: 45
  }
  render() {
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
              bgcolor='primary.barbell'
              height={50}
              minWidth={45}
              boxShadow={3}
            >
              {this.state.barbell}
            </Box>
            <PoseGroup>
              {this.state.loaded.map((plate, index) => {
                return (
                  <Plate
                    key={index}
                    className='plate-wrapper'
                    plateHeight={25 + plate * 4}
                    index={index}
                  >
                    <Box
                      className='plate'
                      bgcolor='primary.main'
                      color='primary'
                      boxShadow={3}
                    >
                      {plate}
                    </Box>
                  </Plate>
                )
              })}
            </PoseGroup>
          </Box>
        </Grid>
        <Grid
          direction='row'
          justify='center'
          alignItems='center'
          container
          item
          style={{ marginBottom: 30 }}
        >
          <Chip
            icon={<FitnessCenterSharp />}
            color='primary'
            label={`${
              this.state.totalWeight !== 0
                ? this.state.totalWeight
                : this.state.barbell
            } LBS loaded`}
            style={{ marginRight: 10 }}
          />
          <IconButton
            aria-label='reset plates'
            onClick={this.resetPlates.bind(this)}
          >
            <Refresh />
          </IconButton>
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
                  style={{ fontWeight: 'bold' }}
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
      let loaded = [...previousState.loaded, plate]
      let totalWeight = loaded.reduce((a, b) => a + b * 2, this.state.barbell)

      return {
        loaded,
        totalWeight
      }
    })
  }
  resetPlates() {
    this.setState({
      loaded: [],
      totalWeight: this.state.barbell
    })
  }
}

export default Counter

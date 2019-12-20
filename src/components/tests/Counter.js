import React, { Component } from 'react';
import { Fab, Grid, GridList, Chip, Box } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import posed, { PoseGroup } from 'react-pose';
import { blue, green, yellow } from '@material-ui/core/colors';

const Item = posed.div({
  enter: {
    height: ({ plateHeight }) => (plateHeight < 50 ? 50 : plateHeight),
    transition: {
      height: {
        ease: 'easeOut',
        duration: 300
      }
    }
  },
  exit: {
    height: 0
  }
});
// import Button from '@material-ui/core/Button'
class Counter extends Component {
  state = {
    loaded: [],
    totalWeight: 0,
    availablePlates: [45, 35, 25, 10, 5, 2.5, 1.25],
    availablePlates: [
      {
        weight: 45,
        color: blue[500]
      },
      {
        weight: 35,
        color: green[500]
      },
      {
        weight: 25,
        color: yellow[500]
      },
      {
        weight: 10,
        color: '#fff'
      },
      {
        weight: 5,
        color: blue[500]
      },
      {
        weight: 2.5,
        color: green[500]
      },
      {
        weight: 1.25,
        color: '#fff'
      }
    ],
    barbell: 55
  };

  render() {
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
              height={50}
            >
              {this.state.barbell}
            </Box>
            <PoseGroup>
              {this.state.loaded.map((plate, index) => {
                return (
                  <Item key={index} plateHeight={30 + plate.weight * 4}>
                    <Box
                      className='plate'
                      bgcolor='primary.main'
                      color='primary'
                    >
                      {plate.weight}
                    </Box>
                  </Item>
                );
              })}
            </PoseGroup>
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
                  aria-label={`add ${plate.weight}lbs`}
                  onClick={this.addPlate.bind(this, plate.weight)}
                  style={{ fontWeight: 'bold' }}
                >
                  {plate}
                </Fab>
              </Grid>
            );
          })}
        </GridList>
      </Grid>
    );
  }
  addPlate(plate) {
    this.setState(previousState => {
      let loaded = [...previousState.loaded, plate];
      let totalWeight = loaded.reduce((a, b) => a + b * 2, this.state.barbell);

      return {
        loaded,
        totalWeight
      };
    });
  }
}

export default Counter;

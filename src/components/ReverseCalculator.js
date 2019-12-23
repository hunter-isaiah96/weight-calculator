import React, { useState } from 'react'
import { WeightDisplay } from './'
import { GridList, Fab, Box, Chip, IconButton } from '@material-ui/core'
import { FitnessCenterSharp, Refresh } from '@material-ui/icons'
import { barBell, getTotalWeightLoaded } from '../Utilities'

const ReverseCalculator = () => {
  const [loadedPlates, setLoadedPlates] = useState([])
  const [totalWeight, setTotalWeight] = useState(barBell)
  const availablePlates = [45, 35, 25, 10, 5, 2.5]

  const addPlate = plate => {
    if (loadedPlates.length === 9) return
    let newLoadedPlates = [...loadedPlates, plate]
    setLoadedPlates(newLoadedPlates)
    setTotalWeight(getTotalWeightLoaded(newLoadedPlates))
  }

  const resetPlates = () => {
    setLoadedPlates([])
    setTotalWeight(barBell)
  }

  return (
    <div style={{ width: '100%' }} data-testid='reverse-calculator'>
      <WeightDisplay
        barbell={barBell}
        loadedPlates={loadedPlates}
      ></WeightDisplay>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginY={2}
      >
        <Chip
          icon={<FitnessCenterSharp />}
          color='primary'
          label={`${totalWeight}LBS | ${Math.round(totalWeight / 2.205)}KG`}
          style={{ marginRight: 10 }}
        />
        <IconButton aria-label='reset plates' onClick={resetPlates.bind(this)}>
          <Refresh />
        </IconButton>
      </Box>

      <GridList cellHeight={80} cols={3}>
        {availablePlates.map((element, index) => {
          return (
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              key={index}
            >
              <Fab
                color='primary'
                onClick={addPlate.bind(this, availablePlates[index])}
                data-testid={`add-plate${index}`}
              >
                {element}
              </Fab>
            </Box>
          )
        })}
      </GridList>
    </div>
  )
}

export default ReverseCalculator

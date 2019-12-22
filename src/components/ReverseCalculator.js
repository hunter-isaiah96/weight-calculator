import React, { useState } from 'react'
import { WeightDisplay } from './'
import { GridList, Fab, Box, Chip, IconButton } from '@material-ui/core'
import { FitnessCenterSharp, Refresh } from '@material-ui/icons'

const ReverseCalculator = () => {
  const [loadedPlates, setLoadedPlates] = useState([])
  const barbell = 45
  const [totalWeight, setTotalWeight] = useState(barbell)
  const availablePlates = [45, 35, 25, 10, 5, 2.5]

  const addPlate = plate => {
    if (loadedPlates.length === 9) return
    let newLoadedPlates = [...loadedPlates, plate]
    setLoadedPlates(newLoadedPlates)
    setTotalWeight(newLoadedPlates.reduce((a, b) => a + b * 2, barbell))
  }

  const resetPlates = () => {
    setLoadedPlates([])
    setTotalWeight(barbell)
  }

  return (
    <div style={{ width: '100%' }}>
      <WeightDisplay
        barbell={barbell}
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

      <GridList cellHeight={60} cols={3}>
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

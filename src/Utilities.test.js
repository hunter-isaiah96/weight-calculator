import { getTotalWeightLoaded, findPlates } from './Utilities'

it('should calculate the total weight loaded', () => {
  expect(getTotalWeightLoaded([45])).toBe(135)
})

it('should return weights needed to equal specified weight', () => {
  expect(findPlates(135)).toEqual(expect.arrayContaining([45]))
})

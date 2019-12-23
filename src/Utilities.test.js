import { getTotalWeightLoaded, findPlates } from './Utilities'

it('should calculate the total weight loaded', () => {
  expect(getTotalWeightLoaded([45])).toBe(135)
  expect(getTotalWeightLoaded([55, 55], 55)).toBe(275)
})

it('should return weights needed to equal specified weight', () => {
  expect(findPlates(135)).toEqual(expect.arrayContaining([45]))
  expect(findPlates(225, [55, 45, 35, 25, 10, 5])).toEqual([55, 35])
  expect(findPlates(275, [55, 45, 35, 25, 10, 5], 55)).toEqual([55, 55])
})

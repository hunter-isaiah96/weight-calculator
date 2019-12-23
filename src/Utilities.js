export const defaultWeightSet = [45, 35, 25, 10, 5, 2.5]
export const barBell = 45

// Calculates how much weight is loaded including the bar
export const getTotalWeightLoaded = (plates = [], barbell = barBell) =>
  plates.reduce((a, b) => a + b * 2, barbell)

// Returns the plates you need to put on each side to total a given weight
export const findPlates = (
  weight = 0,
  weightsAvailable = defaultWeightSet,
  barbell = barBell
) => {
  let plates = []
  let left = weight - barbell
  while (left > 0) {
    let foundOne = false
    for (let i = 0; i < weightsAvailable.length; i++) {
      let amount = weightsAvailable[i] * 2
      if (amount <= left) {
        left -= amount
        plates.push(weightsAvailable[i])
        foundOne = true
        break
      }
    }
    if (!foundOne) break
  }
  return plates
}

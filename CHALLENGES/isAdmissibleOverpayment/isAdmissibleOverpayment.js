function solution(prices, notes, x) {
  const regex = /(\d+.\d+)% (higher|lower)/

  const diferences = notes.map((note, i) => {
    const match = note.match(regex)

    if (match) {
      const [_, percentage, diference] = match

      return diference === 'higher'
        ? getHigherDiference(prices[i], parseFloat(percentage))
        : getLowerDiference(prices[i], parseFloat(percentage))
    }
    return 0
  })

  const paymentDiference = diferences.reduce((acc, value) => {
    return acc + value
  }, 0)

  return paymentDiference <= x
}

function getLowerDiference(price, percentage) {
  const storePrice = (100 * price) / (100 - percentage)
  return parseFloat(((storePrice - price) * -1).toPrecision(14))
}

function getHigherDiference(price, percentage) {
  const storePrice = price / (percentage / 100 + 1)
  return parseFloat(price - storePrice.toPrecision(14))
}

module.exports = solution

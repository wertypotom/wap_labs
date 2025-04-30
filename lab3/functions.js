'use strict'

function computeSumOfSquares(numbers) {
  return numbers.reduce((acc, num) => acc + num * num, 0)
}

const printOddNumbersOnly = (numbers) => {
  numbers.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num)
    }
  })
}

const printFibo = function (n, a, b) {
  const result = [a, b]

  if (n === 1) return [a]

  while (result.length < n) {
    const next = result[result.length - 1] + result[result.length - 2]
    result.push(next)
  }

  return result.join(', ')
}

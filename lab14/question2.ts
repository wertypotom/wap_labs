const secondLargest = (numbers: number[]) => {
  const max = Math.max(...numbers)
  let secondLargest = -Infinity

  for (const num of numbers) {
    if (num > secondLargest && num < max) secondLargest = num
  }

  return secondLargest
}

console.log(secondLargest([20, 120, 111, 215, 54, 78]))

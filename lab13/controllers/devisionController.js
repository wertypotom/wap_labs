const parametresBased = (req, res) => {
  const { firstNumber, secondNumber } = req.params

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return res.status(400).json({
      error: 'Invalid input. Please provide two numbers.',
    })
  }

  res.status(200).json({
    result: Number(firstNumber) / Number(secondNumber),
  })
}

const queryBased = (req, res) => {
  const { a, b } = req.query

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      error: 'Invalid input. Please provide two numbers.',
    })
  }

  res.status(200).json({
    result: Number(a) / Number(b),
  })
}

const jsonAndURLEncodedBased = (req, res) => {
  const { a, b } = req.body

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({
      error: 'Invalid input. Please provide two numbers.',
    })
  }

  res.status(200).json({
    result: Number(a) / Number(b),
  })
}

module.exports = {
  parametresBased,
  queryBased,
  jsonAndURLEncodedBased,
}

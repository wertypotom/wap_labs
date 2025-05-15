const express = require('express')
const router = express.Router()

const {
  parametresBased,
  queryBased,
  jsonAndURLEncodedBased,
} = require('../controllers/additionController')

router.get('/:firstNumber/:secondNumber', parametresBased)
router.route('/').get(queryBased).post(jsonAndURLEncodedBased)

module.exports = router

const express = require('express')
const { hello, fibonacci } = require('../controllers/fibonacci')
router = express.Router()

router.get('/', hello)
router.get('/:n', fibonacci)

module.exports = router
 
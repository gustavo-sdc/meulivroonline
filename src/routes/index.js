const { Router } = require('express')
const userRoutes = require('./userRoutes')
const bookRoutes = require('./bookRoutes')

const router = Router()

router.use('/usuario', userRoutes)
router.use('/livro', bookRoutes)

module.exports = router
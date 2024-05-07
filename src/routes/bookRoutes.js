const { Router } = require('express')
const bookControllerPack = require('../controllers/bookController')

const router = Router()
const bookController = new bookControllerPack()

router.post('/', bookController.createBook)
router.put('/', bookController.updateBook)
router.get('/', bookController.showBook)
router.patch('/', bookController.allBook)
router.delete('/', bookController.deleteBook)

module.exports = router
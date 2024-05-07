const {Router} = require('express')
const userControllerPack = require('../controllers/userController')

const router = Router()
const userController = new userControllerPack()

router.post('/', userController.createUser)
router.get('/', userController.showUser)
router.put('/', userController.updateUser)
router.delete('/', userController.deleteUser)

module.exports = router
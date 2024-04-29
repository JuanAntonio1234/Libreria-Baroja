/* eslint-disable no-undef */
// user.router.js

const router = require('express').Router()

const {
	getAllUsers,
	createUser,
	updateUser,
	getUserById,
	deleteUserById
} = require('../controllers/user.controller.js')

const { checkAuth } = require('../middlewares/auth.js')

router.get('/', getAllUsers)
//router.get('/checkAuth', checkAuth)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/update', checkAuth, updateUser)
router.delete('/:id', deleteUserById)

module.exports = router

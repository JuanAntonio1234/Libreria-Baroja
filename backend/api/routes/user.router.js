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

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById)

module.exports = router
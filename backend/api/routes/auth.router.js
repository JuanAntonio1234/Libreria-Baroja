/* eslint-disable no-undef */
// book.router.js

const router = require('express').Router()

const {
    signUp,
    login
} = require('../controllers/auth.controller')


router.post('/login', login)
router.post('/signUp', signUp)


module.exports = router
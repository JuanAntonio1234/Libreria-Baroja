/* eslint-disable no-undef */
// book.router.js

const router = require('express').Router()

const {
    signUp,
    login,
} = require('../controllers/auth.controller')

const {
    checkAuth,
} = require('../middlewares/auth.js')

router.post('/login', login)
router.post('/signUp', signUp)
//router.get("/checkAuth", checkAuth)


module.exports = router
/* eslint-disable no-undef */

const router = require('express').Router()

//const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const bookRouter = require('./book.router')

//router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/book', bookRouter)

module.exports = router

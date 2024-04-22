/* eslint-disable no-undef */

const router = require('express').Router()

//const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const bookRouter = require('./book.router')
const authRouter = require('./auth.router')


//router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/auth', authRouter)

module.exports = router

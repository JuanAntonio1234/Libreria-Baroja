/* eslint-disable no-undef */

const router = require('express').Router()

//const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const bookRouter = require('./book.router')
const authRouter = require('./auth.router')
const user_bookRouter = require('./user_book.router')
const stripeRouter = require('./stripe.router')


//router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/auth', authRouter)
router.use('/user-book', user_bookRouter)
router.use('/stripe', stripeRouter)

module.exports = router

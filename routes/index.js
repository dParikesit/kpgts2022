const router = require('express').Router()

const user = require('./user')
const registration = require('./registration')
const post = require('./post')

router.use("/user", user)
router.use("/registration", registration)
router.use("/login", login)
router.use("/logout", logout)
router.use("/post", post)

module.exports = router
const router = require("express").Router()
const AuthFactory = require("../handlers/auth")()

const loginValidator = require("./validation/login.js")
const validationManager = require("./middleware/validationManager")

router.post("/login", loginValidator, validationManager, AuthFactory.login)




module.exports = router
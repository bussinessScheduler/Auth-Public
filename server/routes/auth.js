const router = require("express").Router()
const AuthFactory = require("../handlers/auth")()

const validationManager = require("./middleware/validation")

// const createTopupValidator = require("./validators/create.topup")

router.post("/login", validationManager, AuthFactory.auth)




module.exports = router
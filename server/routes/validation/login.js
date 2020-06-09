const { body } = require('express-validator');

module.exports = [
    body('userId').isLength({ min: 5 }),
    body('password').isLength({ min: 4 })
]

const jwtFactory = () => {

    const jwt = require('jsonwebtoken');
    const secret = process.env.JWT_SECRET

    const sign = (payload, options = {}) => {
        try {
            return jwt.sign(payload, secret, options);
        } catch (e) {
            throw new Error(e)
        }
    }

    // const verify = (token) => {
    //     const decoded = jwt.verify(token, secret);
    // }

    return {
        sign,
        // verify
    }
}

module.exports = jwtFactory


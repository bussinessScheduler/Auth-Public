const AuthFactory = () => {

    const Auth = require("../models/Auth")
    const errorHandler = require("../utils/errorHandler")

    /**
     * logins a user
     * @param {*} req                  - resquest obj
     * @param {*} res                  - response obj
     * @param {Date} req.body.userId   - user unique identifier
     * @param {Date} req.body.password - user's password
     */
    const login = async (req, res) => {
        const { userId, password } = req.body
        try {
            //get password for the user that matches userid
            const rp = await Auth.findOne({ userId }).lean().select({ password: 1, _id: 0 })
            if (!rp) return res.status(400).json({ error: "bad request", message: "user does not exists" })

            // compare passwords
            if (password !== rp.password) return res.status(400).json({ error: "bad request", message: "password does not match" })

            return res.status(200).json({ success: true })

        } catch (e) {
            return errorHandler(res)
        }
    }

    return {
        login
    }

}

module.exports = AuthFactory

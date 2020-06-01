const AuthFactory = () => {

    const login = (req, res) => {
        return res.status(200).json({ success: true })
    }

    return {
        login
    }

}

module.exports = AuthFactory

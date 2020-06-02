const errorHandler = (res) => {
    return res.status(500).json({ error: "server error", message: "server has failed" })
}

module.exports = errorHandler
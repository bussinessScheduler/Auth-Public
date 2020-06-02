const Auth = require("../server/models/Auth")

const createAuth = async (newAuthObj) => {
    const authObj = {
        userId: "userId|507f191e810c19729de860ea",
        password: "12345",
        creationDate: Date.now()
    }
    return await Auth.create({ ...authObj, ...newAuthObj })
}

const deleteAll = async () => {
    return await Auth.deleteMany({})
}

module.exports = {
    createAuth,
    deleteAll
}
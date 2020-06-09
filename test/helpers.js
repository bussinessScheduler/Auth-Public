const Auth = require("../server/models/Auth")
const jwtUtils = require("../server/utils/jwt")

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

const createFakeToken = (payload) => {
    return jwtUtils(payload)
}

module.exports = {
    createAuth,
    deleteAll,
    createFakeToken
}
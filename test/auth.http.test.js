process.env.NODE_ENV = "test"

const request = require("supertest")
const helpers = require("./helpers")

describe("http tests for auth service", function () {
    const server = require("../server")
    beforeEach(function () {

    })
    afterEach(async function () {
        await helpers.deleteAll()
    })

    it("login succesfull when userId and password are correct", async function () {
        await Promise.all([
            helpers.createAuth(), helpers.createAuth({ userId: "userId|507f191e810c19729d554rea", password: "3343" })
        ])
        return request(server)
            .post("/login")
            .send({ userId: "userId|507f191e810c19729d554rea", password: "3343" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(res => { if (!res.body.success) { throw new Error("login status is false") } })
            .expect(200)
    })
})
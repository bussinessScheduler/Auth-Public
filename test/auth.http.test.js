process.env.NODE_ENV = "test"

const request = require("supertest")

describe("http tests for auth service", function () {
    const server = require("../server")
    beforeEach(function () {

    })
    afterEach(function () { })

    it("checks if login is succesfull", function () {
        request(server)
            .post("/")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})
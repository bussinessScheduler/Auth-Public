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

    it("validates userId on POST /login", async function () {
        return request(server)
            .post("/login")
            .send({ userId: "use", password: "3343" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422)
    })

    it("validates password on POST /login", async function () {
        return request(server)
            .post("/login")
            .send({ userId: "user|oosdoijsfoj", password: "33" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422)
    })



})
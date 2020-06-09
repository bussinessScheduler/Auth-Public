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

    it("login succesfull when userId and password are correct on POST /login", async function () {
        await Promise.all([
            helpers.createAuth(), helpers.createAuth({ userId: "userId|507f191e810c19729d554rea", password: "3343" })
        ])
        return request(server)
            .post("/login")
            .send({ userId: "userId|507f191e810c19729d554rea", password: "3343" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(res => { if (!res.body.success) { throw new Error("login status is false") } })
            .expect(res => { if (!res.body.token) { throw new Error("token not provided") } })
            .expect(200)
    })


    it("login fails when userId is incorrect on POST /login", async function () {
        await Promise.all([
            helpers.createAuth(), helpers.createAuth({ userId: "userId|507f191e810c19729d554rea", password: "3343" })
        ])
        return request(server)
            .post("/login")
            .send({ userId: "userId|507f191e810c19729d500000", password: "3343" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    })

    it("login fails when password is incorrect on POST /login", async function () {
        await Promise.all([
            helpers.createAuth(), helpers.createAuth({ userId: "userId|507f191e810c19729d554rea", password: "3343" })
        ])
        return request(server)
            .post("/login")
            .send({ userId: "userId|507f191e810c19729d554rea", password: "3398" })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    })

})
import request from 'supertest';
import app from './index';

// Test suite here...

describe("POST /odd-positive-average", () => {
    describe("Given a good input of an array of integers", () => {
        it("Should respond with status code 200 and the correct answer", async () => {
            await request(app)
                .post('/odd-positive-average')
                .send([1,2,3,4,5,6,7])
                .set("Accept", "application-json")
                .expect(200, {average: 4});
        })
    });

    describe("Given a bad input of an array containing non-integers", () => {
        it("Should respond 400", async () => {
            await request(app)
                .post('/odd-positive-average')
                .send([1,2.0,3,4,5,6,'7'])
                .set('Accept', 'application-json')
                .expect(400, {message: "Must input integers only"});
        })
    });

    describe("Given a non array input", () => {
        it("Should respond 400", async () => {
            await request(app)
                .post('/odd-positive-average')
                .send({hello: "world"})
                .set('Accept', 'application-json')
                .expect(400, {message: "Must input an array"});
        })
    });
})

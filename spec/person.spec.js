// set env as testing
process.env.NODE_ENV = 'test';
// pull in chai
const {expect} = require('chai');
// pull in supertest - package that let's us test API endpoints
const supertest = require('supertest');
// pull in our app
const app = require('../server');
// configure supertest
const request = supertest(app);

// test GET api/person
describe('GET /api/person', () => {
    let response;
      before(() => {
        return request
        .get('/api/person')
        .then(res => {
          response = res;
        });
      });
      // the statusCode
      it('responds with 200 statusCode', () => {
        expect(response.statusCode).to.equal(200);
      });
      // the response
      it('responds with the persons data on /person', () => {
        expect(response.body.persons).to.be.an('array');
        expect(response.body.persons.length).to.equal(21);
      });
  });
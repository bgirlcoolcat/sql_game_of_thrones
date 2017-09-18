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

// test GET api/house
describe('GET /api/houses', () => {
  let response;
    before(() => {
      return request
      .get('/api/houses')
      .then(res => {
        response = res;
      });
    });
    // the statusCode
    it('responds with 200 statusCode', () => {
      expect(response.statusCode).to.equal(200);
    });
    // the response
    it('responds with the house data on /houses', () => {
      expect(response.body.houses).to.be.an('array');
      expect(response.body.houses.length).to.equal(8);
    });
});

// GET api/house/:id
describe.only('GET /api/houses/:id', () => {
  let response;
  // let houseId = req.params.id; 
    before(() => {
    return request
      .get('/api/houses/8')
      .then(res => {
        response = res;
      });
    });
    // the statusCode
    it('responds with 200 statusCode', () => {
      expect(response.statusCode).to.equal(200);
    });
    // the response
    it('responds with the house data on /houses/:id', () => {
      const {houses} = response.body;
      expect(houses.house_name).to.equal('Tarly');
      expect(houses.id).to.equal(8);
    });
})


// test POST api/house
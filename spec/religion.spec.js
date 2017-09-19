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

// test GET api/religion
describe('GET /api/religion', () => {
    let response;
      before(() => {
        return request
        .get('/api/religion')
        .then(res => {
          response = res;
        });
      });
      // the statusCode
      it('responds with 200 statusCode', () => {
        expect(response.statusCode).to.equal(200);
      });
      // the response
      it('responds with the religions data on /religion', () => {
        expect(response.body.religions).to.be.an('array');
        expect(response.body.religions.length).to.equal(5);
      });
  });

  // test POST api/religion
describe('POST /api/religion', () => {
    let response;
    let religionName = 'Great Stallion';
    let religionType = 'henotheistic';
    let religionGod =  'horse';
    before(() => {
      return request
      .post('/api/religion')
      .send({
        name: religionName,
        type: religionType,
        god: religionGod
      }).then((res) => {
          response = res;
      })
    })
    it('has a statusCode of 201', () => {
      expect(response.statusCode).to.equal(201);
    });
    it('returns the added religion with name, type, god values', () => {
      const {religion} = response.body;
      expect(religion.name).to.equal(religionName);
      expect(religion.type).to.equal(religionType);
      expect(religion.god).to.equal(religionGod);
    });
  });
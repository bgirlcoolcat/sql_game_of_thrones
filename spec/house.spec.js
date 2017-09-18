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
describe('GET /api/houses/:id', () => {
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
});

// test POST api/house
describe('POST /api/houses', () => {
  let response;
  let houseName = 'Night\'s Watch';
  let houseSigilImg = 'https://vignette4.wikia.nocookie.net/gameofthrones/images/e/ed/Night%27s-Watch-Main-Shield.PNG/revision/latest?cb=20161231113156';
  let houseWords = 'Sword in the Darkness';
  let houseSeat = null;
  let houseRegion =  'The Wall';
  before(() => {
    return request
    .post('/api/houses')
    .send({
      house_name: houseName,
      sigil_img: houseSigilImg,
      words: houseWords,
      seat: houseSeat,
      region: houseRegion
    }).then((res) => {
        response = res;
    })
  })
  it('has a statusCode of 201', () => {
    expect(response.statusCode).to.equal(201);
  });
  it('returns the added house with house_name, sigil_img, words, seat, region values', () => {
    const {house} = response.body;
    expect(house.house_name).to.equal(houseName);
    expect(house.sigil_img).to.equal(houseSigilImg);
    expect(house.words).to.equal(houseWords);
    expect(house.seat).to.equal(houseSeat);
    expect(house.region).to.equal(houseRegion);
  });
});
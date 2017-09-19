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

  // GET api/person/:id
describe('GET /api/person/:id', () => {
    let response;
    // let personId = req.params.id; 
      before(() => {
      return request
        .get('/api/person/6')
        .then(res => {
          response = res;
        });
      });
      // the statusCode
      it('responds with 200 statusCode', () => {
        expect(response.statusCode).to.equal(200);
      });
      // the response
      it('responds with the person data on /person/:id', () => {
        const {persons} = response.body;
        expect(persons.name).to.equal('Tyrion Lannister');
        expect(persons.id).to.equal(6);
      });
  });

  // test POST api/person
describe('POST /api/person', () => {
    let response;
    let personName = 'Renly Baratheon';
    let personUrl = 'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwjPgeKShrHWAhXDVRQKHUbHCaQQjRwIBw&url=http%3A%2F%2Fgameofthrones.wikia.com%2Fwiki%2FRenly_Baratheon&psig=AFQjCNGfjSYkxDcqJtkoNyUM5s1qzJcvsA&ust=1505903583556792';
    let personDead = true;
    let personHouseId = 3;
    let personReligionId =  4;
    before(() => {
      return request
      .post('/api/person')
      .send({
        name: personName,
        picture_url: personUrl,
        dead: personDead,
        house_id: personHouseId,
        religion_id: personReligionId
      }).then((res) => {
          response = res;
      })
    })
    it('has a statusCode of 201', () => {
      expect(response.statusCode).to.equal(201);
    });
    it('returns the added person with name, picture_url, dead, house_id, religion_id values', () => {
      const {person} = response.body;
      expect(person.name).to.equal(personName);
      expect(person.picture_url).to.equal(personUrl);
      expect(person.dead).to.equal(personDead);
      expect(person.house_id).to.equal(personHouseId);
      expect(person.religion_id).to.equal(personReligionId);
    });
  });
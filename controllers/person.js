// pull db connection
const db = require('../db/index');

module.exports = {
  getAllPeople (req, res) {
    db.many('SELECT * FROM PEOPLE')
    .then(function (persons) {
      res.send({
        persons: persons
      });
    }).catch(console.log);
  },

  getPersonById (request, response) {
    
  },
  createPerson (request, response){

  }
};
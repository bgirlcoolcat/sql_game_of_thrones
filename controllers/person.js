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

  getPersonById (req, res) {
    const {person_id} = req.params;
    db.one('SELECT * FROM PEOPLE WHERE id = $1', person_id)
    .then((persons) => {
      res.send({
        persons: persons
      });
    }).catch(console.log);
    
  },
  createPerson (req, res){

  }
};
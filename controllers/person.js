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
    db.one('INSERT INTO people (name, picture_url, dead, house_id, religion_id) VALUES ($1, $2, $3, $4, $5) returning *', [req.body.name, req.body.picture_url, req.body.dead, req.body.house_id, req.body.religion_id])
    .then((person) => {
      res.status(201).send({
        person: person
      });
    }).catch(console.log);
  },

deletePerson (req, res){
  const {person_id} = req.params;
  db.one('DELETE FROM people WHERE id = $1', person_id)
  .then((person) => {
    res.status(204).send({
      person: person
    });
  }).catch(console.log);
}

};


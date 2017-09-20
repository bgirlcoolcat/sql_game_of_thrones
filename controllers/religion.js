// pull db connection
const db = require('../db/index');

module.exports = {
  getAllReligions (req, res) {
    db.many('SELECT * FROM religions')
    .then(function (religions) {
      res.send({
        religions: religions
      });
    }).catch(console.log);
  },

  createReligion (req, res) {
    db.one('INSERT INTO religions (name, type, god) VALUES ($1, $2, $3) returning *', [req.body.name, req.body.type, req.body.god])
    .then((religion) => {
      res.status(201).send({
        religion: religion
      });
    }).catch(console.log);
  }
};
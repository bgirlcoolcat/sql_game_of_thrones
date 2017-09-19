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
  
  createReligion (req, res){
  }
};
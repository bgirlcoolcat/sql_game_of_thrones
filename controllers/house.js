// pull db connection
const db = require('../db/index');

module.exports = {
  getAllHouses (req, res) {
    db.many('SELECT * FROM HOUSES')
    .then(function (houses) {
      res.send({
        houses: houses
      });
    }).catch(console.log);
  },
  getHousesById (req, res) {
    
  },
  createHouse (req, res){

  }
};
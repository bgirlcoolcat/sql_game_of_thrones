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
    const {house_id} = req.params;
    db.one('SELECT * FROM HOUSES WHERE id = $1', house_id)
    .then((houses) => {
      res.send({
        houses: houses
      });
    }).catch(console.log);
  },

  createHouse (req, res){

  }
};
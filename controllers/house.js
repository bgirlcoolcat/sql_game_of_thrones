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
    db.one('INSERT INTO houses (house_name, sigil_img, words, seat, region) VALUES ($1, $2, $3, $4, $5) returning *', [req.body.house_name, req.body.sigil_img, req.body.words, req.body.seat, req.body.region])
    .then((house) => {
      res.status(201).send({
        house: house
      });
    }).catch(console.log);
  }
};
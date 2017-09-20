// Create a subrouter
const router = require('express').Router();
// Pull in controllers
const houses = require('../controllers/house');
// Add specific routes to router
router.get('/', houses.getAllHouses);
router.get('/:house_id', houses.getHousesById);
router.post('/', houses.createHouse);

// localhost:3000/api/houses/3/person
router.get('/:house_id/person', houses.getAllPeopleByHouse);


// Export subrouter
module.exports = router;
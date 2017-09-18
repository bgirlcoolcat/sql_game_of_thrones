// Create a subrouter
const router = require('express').Router();
// Pull in controllers
const houses = require('../controllers/house');
// Add specific routes to router
router.get('/', houses.getAllHouses);
router.get('/:house_id', houses.getHousesById);
router.post('/:house_id', houses.createHouse);
// Export subrouter
module.exports = router;
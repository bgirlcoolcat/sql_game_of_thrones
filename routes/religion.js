// Create a subrouter
const router = require('express').Router();
// Pull in controllers
const religions = require('../controllers/religion');
// Add specific routes to router
router.get('/', religions.getAllReligions);
router.post('/', religions.createReligion);
// Export subrouter
module.exports = router;
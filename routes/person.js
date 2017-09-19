// Create a subrouter
const router = require('express').Router();
// Pull in controllers
const person = require('../controllers/person');
// Add specific routes to router
router.get('/', person.getAllPeople);
router.get('/:person_id', person.getPersonById);
router.post('/', person.createPerson);
// Export subrouter
module.exports = router;
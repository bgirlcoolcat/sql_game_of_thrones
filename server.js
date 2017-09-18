const app = require('express')();
const {json} = require('body-parser');
const db = require('./db');
// Create links to the routes folder
const houseRouter = require('./routes/house');
const personRouter = require('./routes/person');
const religionRouter = require('./routes/religion');

app.use('/api/houses', houseRouter);
app.use('/api/person', personRouter);
app.use('/api/religion', religionRouter);

module.exports = app;
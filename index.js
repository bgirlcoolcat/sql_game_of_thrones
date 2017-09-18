const app = require('./server');
const {PORT} = require('./config');

// It lets us know that the Server is up and running...
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Port ' + PORT + ' is listening...');
});
const app = require('./server');
const {PORT} = require('./config');
const chunk = require('lodash/chunk');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', {
      header: {
          title: 'Game of Thrones Homepage',
          tagLine: 'Winter is coming...',
          showButton: true,
          showButton: true
      }
  });
});

app.get('/houses', (req, res) => {
  res.render('pages/houses', {
      header: {
          title: 'Houses',
          tagLine: 'Behold the many houses of Westeros... and further afield',
          showButton: false
      }
      // pets: chunk(pets, 3)
      });
});

// It lets us know that the Server is up and running...
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Port ' + PORT + ' is listening...');
});
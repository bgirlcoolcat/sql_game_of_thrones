const app = require('./server');
const {PORT} = require('./config');
const chunk = require('lodash/chunk');
const db = require('./db');

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
  db.many('SELECT * FROM HOUSES')
  .then((houses) => {
  res.render('pages/houses', {
      header: {
          title: 'Houses',
          tagLine: 'Behold the many houses of Westeros... and further afield',
          showButton: false
      },
      houses: chunk(houses, 3)
      });
    });
});

// It lets us know that the Server is up and running...
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Port ' + PORT + ' is listening...');
});
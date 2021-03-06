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
  db.many('SELECT * FROM houses')
  .then((houses) => {
  res.render('pages/houses', {
      header: {
          title: 'Houses',
          tagLine: 'Behold the many houses of Westeros... and further afield',
          showButton: true
      },
      houses: chunk(houses, 3)
      });
    });
});

app.get('/person', (req, res) => {
  db.many('SELECT * FROM people')
  .then(function (persons) {
  res.render('pages/person', {
      header: {
          title: 'People',
          tagLine: 'Characters from near and far',
          showButton: true
      },
      persons: chunk(persons, 3)
      });
    });
});

app.get('/religion', (req, res) => {
    db.many('SELECT * FROM religions')
    .then((religions) => {
    res.render('pages/religion', {
        header: {
            title: 'Religions',
            tagLine: 'A multitude of different religions are worshiped by different cultures and peoples in the Known World...',
            showButton: true
        },
        religions: chunk(religions, 3)
        });
      });
  });

// It lets us know that the Server is up and running...
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('Port ' + PORT + ' is listening...');
});
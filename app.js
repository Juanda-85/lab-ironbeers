const express = require('express');

const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(beers => {
      res.render('beers', { beers });
    });
});

app.get('/randomBeer', (req, res, next) => {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then(randomBeer => {
      res.render('randomBeer', { randomBeer })
    });
});


app.listen(3000, () => console.log('🏃‍ on port 3000'));

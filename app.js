
const express = require('express');
const bodyParser = require('body-parser');
//var router = express.Router();
const jparser = bodyParser();
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/public`));
app.set('views',`${__dirname}/views`);
app.set(`view enine`, `html`);
app.engine('html',require('hbs').__express);

app.get('/', function (req, res) {
  res.render('index.html');
});
app.get('/post', function(req, res) {
  res.render('post.html');
});
app.get('/about', function(req, res) {
    res.render('about.html');
});
app.get('/contact', function(req, res) {
  res.render('contact.html',{error: ``});
});
app.get('/article', function(req, res) {
  const post = require('./public/data/post.json');
  res.json(post);
});

app.post('/contact', function(req, res) {
  const user = req.body;
  if (user) {
      if (user.every(x => x !== '')) {
          res.status(201).end();
      }
  }
  res.status(400).send('error');

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

function createError(err) {
  console.log(err);
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

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

app.get('/about', function(req, res) {
    res.render('about.html');
});

app.get('/article', function(req, res) {
  const post = require('./data/post.json');
  res.json(post);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
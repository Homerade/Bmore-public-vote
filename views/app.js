var express = require('express');
var app = express();
var router = express.Router();

// view engine setup
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//-------- routes --------//

// homepage
router.get('/', function (req, res) {
  res.render('home');
});  
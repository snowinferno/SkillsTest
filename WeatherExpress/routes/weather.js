var express = require('express');
var router = express.Router();
var cityData = require(require('path').resolve('./data/cityData'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WeatherExpress' });
});

router.get('/cities', (req, res, next) => {
  if (!req.query.q) {
    return res.json([]);
  }
  res.json({
    items: cityData.filter((city) => {
      return city.name.toLowerCase().startsWith(req.query.q.toLowerCase());
    })
  });
});

router.get('/cities/:zip', (req, res, next) => {
  res.json({
    data: cityData.filter((city) => {
      return city.zip === req.params.zip;
    })[0]
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

var locations = []

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
      locationsSet: locations
  });
});

/* POST  */
router.post('/', function(req, res, next) {
  //napraviomo objekat od podataka koje smo postali na rutu i talav objekat dodajemo u lisu
    var location = {

        user: req.body.user,
        coordinate: {
            latitude: req.body.latitude,
            longitude: req.body.longitude
        },
        time: req.body.time
    };
    locations.push(location);
    res.send({
        success: true
    })
});

module.exports = router;

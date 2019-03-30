var express = require('express');
var router = express.Router();
let b=2;
var locations = [
    {   id: 0,
        user: 'iman2',
        coordinates: {
            latitude: 43.8462588,
            longitude: 18.4330765,
        },
    },
    {
        id: 1,
        user: 'iman2',
        coordinates: {
            latitude: 44.8462588,
            longitude: 18.4330765,
        },
    },
    {
        id: 2,
        user: 'emira',
        coordinates: {
            latitude: 45.8462365,
            longitude: 18.4330778,
        },
    },
]

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
        id: b++,
        email: req.body.email,
        coordinate: {
            latitude: null,
            longitude: null
        }
    };
    locations.push(location);
    res.send({
        success: true
    })
});
router.post('/{:id}', function(req, res, next) {
    //napraviomo objekat od podataka koje smo postali na rutu i talav objekat dodajemo u lisu
    var user = location.map(user=>{
        if(user.userId===req.body.id){
            user.latitude= req.body.latitude;
            user.longitude= req.body.longitude;
            return true;
        }
        return false;
    })
    locations.push(user);
    res.send({
        success: true
    })
});

module.exports = router;

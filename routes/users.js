var express = require('express');
var router = express.Router();
let b=2;
var locations = [
    {   id: 0,
        email: 'iman2',
        coordinates:[ {
            latitude: 43.8462588,
            longitude: 18.4330765,
        }],
    },
    {
        id: 1,
        email: 'iman2',
        coordinates:[ {
            latitude: 44.8462588,
            longitude: 18.4330765,
        }],
    },
    {
        id: 2,
        email: 'emira',
        coordinates: [{
            latitude: 45.8462365,
            longitude: 18.4330778,
        }],
    },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
      locationsSet: locations
  });
});
/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var userr = locations.find((user)=>{
        console.log('id',user.id)
        console.log('id u parametru', req.params.id)
        if(user.id==req.params.id){
            console.log('nasli id');
            return true;
        }
        console.log('nasli id nismo')
        return false;
    })
    console.log('user na krjau',userr);
    res.send(userr);
});

/* POST  */
router.post('/', function(req, res, next) {
  //napraviomo objekat od podataka koje smo postali na rutu i talav objekat dodajemo u lisu
    var location = {
        id: ++b,
        email: req.body.email,
        coordinates: []
    };
    locations.push(location);
    res.send({
        success: true
    })
});

router.post('/:id', function(req, res, next) {
    //napraviomo objekat od podataka koje smo postali na rutu i talav objekat dodajemo u lisu
    let obj={
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    let i;
    for( i = 0; i<locations.length;i++){
        console.log(req.params.id,'i', locations[i].id)
        if(req.params.id == locations[i].id){
            console.log(3);
            locations[i].coordinates.push(obj);
            break;
        }
    }
    console.log(locations[i]);
    res.send('nesto');
});

module.exports = router;

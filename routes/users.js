var express = require('express');
var router = express.Router();
let b=2;
var data = [
    {
        email: 'iman',
        coordinates:[ {
            latitude: 43.8462588,
            longitude: 18.4330765,
        }],
        allMess: [{friend:'emira',mess: 'poruka od emire za iman'},{friend:'iman2',mess: 'poruka od iman2 za iman'}]
    },
    {

        email: 'iman2',
        coordinates:[ {
            latitude: 44.8462588,
            longitude: 18.4330765,
        }],
        allMess: [{friend:'iman',mess: 'poruka'}]
    },
    {
        email: 'emira',
        coordinates: [{
            latitude: 45.8462365,
            longitude: 18.4330778,
        }],
        allMess: [{friend:'iman2',mess: 'poruka'}]
    },
]
//ruta za dobijanje svih frendova
router.get('/all', function(req, res, next) {
    let allUsers=[];
     data.map((e)=>{
        allUsers.push(e.email)
    })
    res.send({
        allUsers
    });
});
router.post('/all', function(req, res, next) {
    var newUser = {
            email: req.body.username,
            coordinates:[ {
                latitude: 43.8462588,
                longitude: 18.4330765,
            }],
            allMess: []
        };

   data.push(newUser);
    res.send({
        success: true
    })
});
//ruta za stavljanje poruke kod pravog usera
router.post('/:user', function(req, res, next) {

    var newMess = {
        friend: req.body.friend,
        mess: req.body.mess
    };

    let i;
    for( i = 0; i<data.length;i++){
        if(req.params.user === data[i].email){
            data[i].allMess.push(newMess);
            break;
        }
    }

    res.send({
        success: true
    })
});

router.get('/:user/:current', function(req, res, next) {


    let obj = data.find((user)=>{

        if(user.email === req.params.user){
            return true;
        }
        return false;
    })
    let allMess = obj.allMess;

    console.log(obj.allMess);

    //od svih poruka vratiti samo one koje su od current usera
    let privateMess=[];
    allMess.map((e)=>{
        if(e.friend === req.params.current){
           privateMess.push({
               friend: req.params.curr,
               mess: e.mess
           })


        }
        return false;
    })
    res.send({
       privateMess
    })
});



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
      locationsSet: data
  });
});
/* GET users listing. */
router.get('/:id', function(req, res, next) {
    let userr = data.find((user)=>{
        console.log('id',user.id);
        console.log('id u parametru', req.params.id);
        if(user.id === req.params.id){
            console.log('nasli id');
            return true;
        }
        console.log('nasli id nismo');
        return false;
    })
    console.log('user na krjau',userr);
    res.send(userr);
});

/* POST  */
router.post('/', function(req, res, next) {
  //napraviomo objekat od podataka koje smo postali na rutu i talav objekat dodajemo u lisu
    var location = {
        id: req.body.id,
        email: req.body.email,
        coordinates: []
    };
    data.push(location);
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
    for( i = 0; i<data.length;i++){
        console.log(req.params.id,'i', data[i].id)
        if(req.params.id === data[i].id){
            console.log(3);
            data[i].coordinates.push(obj);
            break;
        }
    }
    console.log(data[i]);
    res.send('nesto');
});

module.exports = router;

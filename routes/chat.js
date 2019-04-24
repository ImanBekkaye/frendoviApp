var express = require('express');
var router = express.Router();


let allMess = [
    {
        from:'salje',
        to: 'prima',
        mess: 'porukica'
    },
    {
        from:'salje2',
        to: 'prima2',
        mess: 'porukica2'

    },
    {
        from:'neko',
        to: null,
        mess: 'porukica2'

    },
    {
        from:'salje2',
        to: null,
        mess: 'porukica2'

    },
    {
        from:'almasa',
        to: 'demir',
        mess: 'porukica2'

    },{
        from:'demir',
        to: 'almasa',
        mess: 'porukica222'

    }
    ]

/* GET home page. */
router.get('/private/:from/:to', function(req, res, next) {

    let privateMess = []
    allMess.map( (e) => {
        if (
            (e.from === req.params.from && e.to === req.params.to) ||
            (e.from === req.params.to && e.to === req.params.from)
        ){
            privateMess.push(e)
        }
        return false;
    })
    res.send({privateMess});
});


router.post('/private', function(req, res, next) {
    let newPrivateMess = {
        from: req.body.fromm,
        to: req.body.to,
        mess: req.body.mess
    }
    allMess.push(newPrivateMess);
    console.log(newPrivateMess);
    res.send({
        success: true
    })

});

router.get('/group', function(req, res, next) {

    let groupMess = []
    allMess.map( (e) => {
        if (e.to === null){
            groupMess.push(e)
        }
        return false;
    })
    res.send({groupMess});
});


router.post('/group', function(req, res, next) {
    let newPrivateMess = {
        from: req.body.fromm,
        to: req.body.to,
        mess: req.body.mess
    }
    allMess.push(newPrivateMess);
    console.log(newPrivateMess);
    res.send({
        success: true
    })

});


module.exports = router;
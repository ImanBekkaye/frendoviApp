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

module.exports = router;
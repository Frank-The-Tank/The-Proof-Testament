var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg});
});

router.post('/message', function(req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});

module.exports = router;

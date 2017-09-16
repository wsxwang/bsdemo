var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
        res.sendfile(__dirname + '/htmldemo.html');
    }
);

module.exports = router;


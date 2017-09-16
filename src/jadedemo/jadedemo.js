var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
        res.render(__dirname + "/jadedemo.jade",{
            'pagetitle': '布局展示，jade渲染',
            'items':['甲', '乙', '丙','丁']
        });
    }
);

module.exports = router;


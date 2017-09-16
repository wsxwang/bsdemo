var express = require('express');
var router = express.Router();

// 注册子页面路由
var htmldemo = require('../src/htmldemo/htmldemo');
router.use('/htmldemo', htmldemo);
var jadedemo = require('../src/jadedemo/jadedemo');
router.use('/jadedemo', jadedemo);
var elementuidemo = require('../src/elementuidemo/elementuidemo');
router.use('/elementuidemo', elementuidemo);
var dbopr = require('../src/dbopr/dbopr');
router.use('/dbopr', dbopr);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'bs demo',
      desc: 'demo入口，多个demo的入口',
      pages:[
          {link: 'htmldemo', text:'html+vue定制表格', title:'适用于前端交互式页面'},
          {link: 'jadedemo', text:'jade渲染', title:'适用于后端展示页面'},
          {link:'elementuidemo', text:'element ui', tilte:'element ui的学习demo'},
          {link: 'dbopr', text:'sqlite数据库操作', title:'应用html+vue+elementui等技术'},
      ]
  });
});

module.exports = router;

//express_demo.js 文件
var mysqle = require('./mysqle/mysqle');
mysqle=new mysqle();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.post('/agency',urlencodedParser, function (req, res) {
    mysqle.update(req.body,res);
});
app.get('/init', function (req, res) {
    mysqle.init(res);
});
app.get('/vip', function (req, res) {
    mysqle.vip(res);
});
app.post('/check',urlencodedParser, function (req, res) {
    var name=req.body.name;
    mysqle.check(res,name);
});
app.post('/recharge',urlencodedParser, function (req, res) {
    var data=req.body;
    mysqle.recharge(res,data);
});
app.post('/set_password',urlencodedParser, function (req, res) {
    var recharge=req.body.recharge;
    mysqle.recharge(res,recharge);
});
app.get('/game_type', function (req, res) {
    mysqle.game_type(res);
});
app.post('/set_game_type',urlencodedParser, function (req, res) {
    var game_type={
        id:req.body.id,
        money:req.body.money
    };
    mysqle.set_game_type(game_type,res);
});
var server = app.listen(8081, function () {
    console.log("8081")
});
console.log(22)
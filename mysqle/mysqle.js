/**
 * Created by Administrator on 2017/8/16 0016.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '120.92.21.117',
    user     : 'root',
    password : 'godan2017',
    database : 'game_agency'
});
connection.connect();
function rank_discount() {
    // 修改
    this.update=function (data,res) {
        console.log(data);
        var update = 'UPDATE vip SET agency = ?,discount = ? WHERE id = '+data["id"]+'';
        var  updateSqlParams = [data["agency"],data["discount"]];
        console.log(updateSqlParams)
        connection.query(update, updateSqlParams, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            else {
                res.send("success");
            }
        });
    };
    //修改房卡类型
    this.set_game_type=function (data,res) {
        var update = 'UPDATE  game_type set money = ? WHERE id = '+data["id"]+'';
        var  updateSqlParams = [data["money"]];
        connection.query(update, updateSqlParams, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            else {
                res.send("success");
            }
        });
    };
    // 初始化数据
    this.init=function (res) {
        var  sql = 'SELECT * FROM vip where  agency not in (3)';
        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            else {
                res.send(result);
            }
        });
    }
    // 初始化房卡类型数据
    this.game_type=function (res) {
        var  sql = 'SELECT * FROM game_type';
        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            else {
                res.send(result);
            }
        });
    }
    // 会员管理数据
    this.vip=function (res) {
        var  sql = 'SELECT * FROM vip';
        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            else {
                res.send(result);
            }
        });
    }
    //会员搜索
    this.check=function (res,name) {
        var name="%"+[name]+"%";
        var  sql = 'SELECT * FROM vip WHERE v_name like ?';
        connection.query(sql,name,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            else {
                res.send(result);
            }
        });
    };
    //充值
    this.recharge=function (res,recharge) {
        var  sql = 'SELECT recharge FROM agency WHERE PlayerID = 1';
        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            else {
                var total=[Number(result[0].recharge)+Number(recharge)];
                console.log(total);
                var update = 'UPDATE agency SET recharge = ? WHERE PlayerID = 1';
                connection.query(update, total, function (err, result) {
                    if (err) {
                        console.log('[UPDATE ERROR] - ', err.message);
                        return;
                    }
                    else {
                        res.send("充值成功，总数为："+total);
                    }
                });
            }
        });
    }
    // 设置密码
    this.set_password=function (data,res) {
        var key_arry=[];
        for(var item in data){
            key_arry.push(item)
        };
        var update = 'UPDATE vip SET agency = ?,password = ? ';
        connection.query(update, key_arry, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            else {
                res.send("success");
            }
        });
    };
};
module.exports=rank_discount;

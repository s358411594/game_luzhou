/**
 * Created by Administrator on 2017/8/17 0017.
 */
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : '120.92.21.117',
    user     : 'root',
    password : 'godan2017',
    database : 'game'
});

connection.connect();

var modSql = 'UPDATE account SET rank = ?,discount = ? WHERE PlayerID = ?';
var modSqlParams = [2, 32,1];
//改
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
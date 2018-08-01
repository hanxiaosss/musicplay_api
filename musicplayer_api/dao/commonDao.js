var mysql = require('mysql');
var mysqlConf = require('../conf/mysqlConf');
var commonSqlMap = require('./commonSqlMap');
var pool = mysql.createPool(mysqlConf.mysql);

module.exports = {
    top6List: function(callback) {
        pool.query(commonSqlMap.top6List, function(error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    recommandList: function(callback) {
        pool.query(commonSqlMap.recommandList, function(error, result) {
            if (error) throw error;
            callback(result);
        })
    }
};
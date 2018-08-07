var mysql = require('mysql');
var async = require('async');
var mysqlConf = require('../conf/mysqlConf');
var songlistSqlMap = require('./songlistSqlMap');
var songSqlMap = require('./songSqlMap');
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
    },
    songList: function(id, callback) {
        console.log('enter list');
        pool.query(songlistSqlMap.getById, id, function(error, result) {
            if (error) throw error;
            console.log(result);
            var songdetail = []
            var data = eval(result);
            console.log(!data[0].include);
            if (!data[0].include) {
                data[0].songs = songdetail;
                callback(data);
            } else {
                var arr = eval(data[0].include);
                console.log(arr);
                if (arr.length > 0) {
                    async.map(arr, function(item, callback1) {
                        pool.query(songSqlMap.getNameById, item, function(error, resultdata) {
                            if (error) throw error;
                            songdetail.push(resultdata[0]);
                            console.log(songdetail);
                            data[0].songs = songdetail;
                            callback1(null, item);
                        });
                    }, function() {
                        callback(data);
                    });
                } else {
                    data[0].songs = songdetail;
                    callback(data);
                }
            }
        });
    }
};
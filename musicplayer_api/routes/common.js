var express = require('express');
var router = express.Router();
var commonDAO = require('../dao/commonDAO');
var result = require('../model/result');

/* 6top newest song list */
router.get('/newestSong/list', function(req, res) {
    console.log('the newest songs called');
    commonDAO.top6List(function(common) {
        res.json(result.createResult(true, common));
    });
});

/* 6 recommand songlist */
router.get('/recommand/list', function(req, res) {
    console.log('the newest songs called');
    commonDAO.recommandList(function(common) {
        res.json(result.createResult(true, common));
    });
});

module.exports = router;
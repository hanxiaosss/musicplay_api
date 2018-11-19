var express = require('express');
var router = express.Router();
var songDAO = require('../dao/songDAO');
var result = require('../model/result');

/* list songs */
router.get('song/', function(req, res) {
    console.log('list songs called');
    songDAO.list(function(songs) {
        res.json(result.createResult(true, songs));
    });
});

/* get song */
router.get('/:id', function(req, res) {
    var id = req.params.id;
    console.log('get song called, id: ' + id);
    songDAO.getById(id, function(song) {
        res.json(result.createResult(true, song));
    });
});

// /* delete user */
// router.delete('/:id', function(req, res) {
//     var id = req.params.id;
//     console.log('delete user called, id=' + id);
//     userDAO.deleteById(id, function(success) {
//         res.json(result.createResult(success, null));
//     });
// });

// /* add users */
// router.post('/', function(req, res) {
//     console.log('post users called');
//     var user = req.body;
//     console.log(user);
//     userDAO.add(user, function(success) {
//         var r = result.createResult(success, null);
//         res.json(r);
//     });
// });

// /* update users */
// router.put('/:id', function(req, res) {
//     console.log('update users called');
//     var user = req.body;
//     user.id = req.params.id;
//     console.log(user);
//     userDAO.update(user, function(success) {
//         var r = result.createResult(success, null);
//         res.json(r);
//     });
// });

// /* patch users */
// router.patch('/:id', function(req, res) {
//     console.log('patch users called');
//     userDAO.getById(req.params.id, function(user) {
//         var username = req.body.username;
//         if (username) {
//             user.username = username;
//         }
//         var password = req.body.password;
//         if (password) {
//             user.password = password;
//         }
//         console.log(user);
//         userDAO.update(user, function(success) {
//             var r = result.createResult(success, null);
//             res.json(r);
//         });
//     });
// });

module.exports = router;
var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');
var jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OOPTSD' });
});

// GET about page. SECOND PAGE OF THE WEBSITE AFTER YOU LOGIN. RESTRICTED TO LOGGED IN USERS.
router.get('/about', function(req, res, next) {
    try {
        var jwtString = req.cookies.Authorization.split(" ");
        var profile = verifyJwt(jwtString[1]);
        if (profile) {
            res.render('aboutUs');
        }
    }catch (err) {
        res.json({
            "status": "error",
            "body": ["You are not logged in."]
        });
    }
});

/**
 * Adds comments to our database
 */
router.post('/addComment', function(req, res, next) {
// Extract the request body which contains the comments
    comment = new Comment(req.body);
    comment.save(function (err, savedComment) {
        if (err)
            throw err;
        res.json({
            "id": savedComment._id
        });
    });
});

/**
 * Retrieves comments from the database
 */
router.get('/getComments', function(req, res, next)
    {
        Comment.find({}, function (err, comments) {
            if (err)
                res.send(err);
            res.json(comments);
        });
    });

/**
 * Retrieve a specific comment from the database
 */
router.get('/getComment/:id', function(req, res, next){
        var id = req.params.id;
        Comment.find({_id:id}, function(err, comment){
            if(err)
                throw err;
            res.json(comment);
        })
    });

/**
 * Retrieves comments from the database
 */
router.get('/getComment' , function(req, res, next)
    {
        Comment.find({userid:req.query.userid}, function (err, comments)
        {
            if (err)
                res.send(err);
            res.json(comments);
        });
    });

/*
 Verifies a JWT
 */
function verifyJwt(jwtString) {

    var value = jwt.verify(jwtString, 'CSIsTheWorst');
    return value;
}


module.exports = router;

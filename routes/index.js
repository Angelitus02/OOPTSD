//Code by Angel//

var express = require('express');
var router = express.Router();
var Product = require('../models/products');
var jwt = require('jsonwebtoken');

/* Verifies a JWT */
function verifyJwt(jwtString) {
    var value = jwt.verify(jwtString, 'CSIsTheWorst');
    return value;
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', {title: 'Welcome'});
});

// GET backend page. Restricted to logged in users algorithm
router.get('/shopBackend', function (req, res, next) {
    try {
        var jwtString = req.cookies.Authorization.split(" ");
        var profile = verifyJwt(jwtString[1]);
        if (profile) {
            res.render('shopBackend', {title: 'Management'});
        }
    } catch (err) {
        res.render('index',{title: 'Login'});
    }
});

/* GET shop page. */
router.get('/shopFront', function (req, res, next) {
    res.render('shopFront', {title: 'Shop'});
});

router.get('/index', function (req, res, next) {
    res.render('index', {title: 'Login'});
});

router.get('/register', function (req, res, next) {
    res.render('register', {title: 'Register'});
})

router.get('/cart', function (req, res, next) {
    res.render('cart', {title: 'Cart'});
})


/**
 * Retrieves products from the database
 */
router.get('/getProducts', function (req, res, next) {
    Product.find({}, function (err, products) {
        if (err)
            res.send(err);
        res.json(products);
    });
})

/**
 * Retrieves products from the database depending on the ones added to cart
 */
router.get('/getCartProducts', function (req, res, next) {
    //query the ones with the field "Cart?": "Yes"
    Product.find({"cart": "yes"}, function (err, products) {
        if (err)
            res.send(err);
        res.json(products);
    });
});

// Find products with name "variable" parameter :name.
//variable name gets the parameter . Product.find({"name": name} is the query
router.get('/getName/:name', function (req, res, next) {
    var name = req.params.name;
    //logging to console for testing
    console.log("name finding");
    console.log(name);

    //this finds the name in database
    Product.find({"name": name}, function (err, products) {
        if (err)
            res.send(err);
        res.json(products);
    });
});

// Find products with category "variable" parameter :category.
//variable name gets the parameter . Product.find({"name": name} is the query
router.get('/getCategory/:category', function (req, res, next) {
    var categ = req.params.category;
    //logging to console for testing
    console.log("category finding");
    console.log(categ);

    //this finds the name in database
    Product.find({"category": categ}, function (err, products) {
        if (err)
            res.send(err);
        res.json(products);
    });
});


//Change cart field from No to Yes. It Works.
router.post('/addToCart/:name', function (req, res, next) {
    var name = req.params.name;
    console.log("routes function");
    console.log(name);
    Product.find({"name": name}).updateOne({
        'cart': 'yes'
    })
        .exec()
        .then(doc => {
            console.log("Adding to cart: ", doc);
            res.redirect('/shopFront');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

//Discard products
router.post('/discardProduct/:name', function (req, res, next) {
    var name = req.params.name;
    console.log("discarding product");
    console.log(name);
    Product.find({"name": name}).updateOne({
        'cart': 'no'
    })
        .exec()
        .then(doc => {
            console.log("Discarding from cart: ", doc);
            res.redirect('/cart');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});


//empty cart API here...
router.post('/emptyCart', function (req, res, next) {
    Product.find({}).updateMany({
        'cart': 'no',

    })
        .exec()
        .then(doc => {
            console.log("Cart emptied", doc);
            res.redirect('/cart');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});


//DO NOT REMOVE
module.exports = router;

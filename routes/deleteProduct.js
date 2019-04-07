//Code by Stephen//

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/products");

//delete product function
router.post("/", (req, res, next) => {
    const name = req.body.productName;
    console.log("routes function");
    console.log(req.body);
    console.log('name=' + name);
    Product.deleteOne({'name': name})
        .select('name price stockCount description category _id productImage')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            res.redirect('/shopBackend');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;


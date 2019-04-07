//Code by Stephen//

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/products");

//update product function
router.post("/", (req, res, next) => {
    const name = req.body.productNameHidden;
    const price = req.body.productPrice;
    const stockCount = req.body.productCount;
    const description = req.body.productDescription;
    const category = req.body.productCategory;
    console.log("routes function");
    console.log(req.body);
    Product.find({name: req.body.productNameHidden}).updateOne({
        'price': price,
        'stockCount': stockCount,
        'description': description,
        'category': category
    })
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

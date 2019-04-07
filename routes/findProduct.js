//Code by Stephen//

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//return product details
const Product = require("../models/products");

//return product function
router.post("/", (req, res, next) => {
    const name = req.body.name;
    Product.findOne({'name': name})
        .select('name price stockCount description category _id productImage')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    request: {
                        type: 'GET',
                        url: 'http://danu7.it.nuigalway.ie:8684/products'
                    }
                });
            } else {
                res
                    .status(404)
                    .json({message: "Couldn't Lookup"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;

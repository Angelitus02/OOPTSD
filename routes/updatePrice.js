// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const Product = require("../models/products");
//
// router.get("/", (req, res, next) => {
//     Product.find()
//         .select("name price stockCount _id productImage")
//         .exec()
//         .then(docs => {
//             const response = {
//                 count: docs.length,
//                 products: docs.map(doc => {
//                     return {
//                         name: doc.name,
//                         price: doc.price,
//                         stockCount: doc.stockCount,
//                         description: doc.description,
//                         category: doc.category,
//                         productImage: doc.productImage,
//                         _id: doc._id,
//                         request: {
//                             type: "GET",
//                             url: "http://danu7.it.nuigalway.ie:8684/products/" + doc._id
//                         }
//                     };
//                 })
//             };
//             if (docs.length >= 0) {
//                 res.status(200).json(response);
//             } else {
//                 res.status(404).json({
//                     message: 'No entries found'
//                 });
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });
//
// //delete product function?? updatePrice?
// router.post("/", (req, res, next) => {
//     const price = req.body.productPrice;
//     console.log("routes function");
//     console.log(req.body);
//     console.log('price=' + price);
//     Product.updateOne({'price': price})
//         .select('name price stockCount description category _id productImage')
//         .exec()
//         .then(doc => {
//             console.log("From database", doc);
//             res.redirect('/shopBackend');
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({error: err});
//         });
// });
//
// module.exports = router;
//

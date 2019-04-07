const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

//specify how we store a file through multer
//save to upload folder and keep original filename
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

//limit file type for upload
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

//limit file size for upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

//return product details
const Product = require("../models/products");

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


// //return product function
// router.get("/:name", (req, res, next) => {
//     const name = req.params.name;
//     Product.findOne({'name': name})
//         .select('name price stockCount description category _id productImage')
//         .exec()
//         .then(doc => {
//             console.log("From database", doc);
//             if (doc) {
//                 res.status(200).json({
//                     product: doc,
//                     request: {
//                         type: 'GET',
//                         url: 'http://danu7.it.nuigalway.ie:8684/products'
//                     }
//                 });
//             } else {
//                 res
//                     .status(404)
//                     .json({message: "Couldn't Lookup"});
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({error: err});
//         });
// });

// //edit product function
// router.patch("/:name", (req, res, next) => {
//     const name = req.params.name;
//     const updateOps = {};
//     for (const ops of req.body) {
//         updateOps[ops.propName] = ops.value;
//     }
//     Product.update({'name': name}, {$set: updateOps})
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Product updated',
//                 request: {
//                     type: 'GET',
//                     url: 'http://danu7.it.nuigalway.ie:8684/products/' + id
//                 }
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

// //delete product function
// router.delete("/:name", (req, res, next) => {
//     const name = req.params.name;
//     Product.remove({'name': name})
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Product deleted',
//                 request: {
//                     type: 'POST',
//                     url: 'http://danu7.it.nuigalway.ie:8684/products',
//                     body: {name: 'String', price: 'Number'}
//                 }
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });



module.exports = router;
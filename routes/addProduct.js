//Code by Stephen//

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
const Product = require("../models/products");

//specify how we store a file through multer
//save to upload folder and keep original filename
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
    destination: function (req, file, cb) {
        cb(null, './uploads/');
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

//add product function
router.post("/", upload.single('productImage'), (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        stockCount: req.body.stockCount,
        description: req.body.description,
        category: req.body.category,
        productImage: req.file.path,
        cart: "no"
    });
    product
        .save()
        .then(result => {
            console.log(result);
            res.redirect('/shopBackend');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
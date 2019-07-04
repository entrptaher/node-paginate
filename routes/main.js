const router = require('express').Router();
const faker = require('faker');
const Product = require('../models/product');

var randomstring = require("randomstring");
var qr = require('qr-image');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/add-product', (req, res, next) => {
  res.render('main/add-product');
});

router.post('/add-product', (req, res, next) => {
  const product = new Product();

  product.category = req.body.category_name;
  product.name = req.body.product_name;
  product.price = req.body.product_price;
  product.cover = faker.image.image();

  product.save(function(err) {
    if (err) throw err;
    res.redirect('/add-product');
  });
});

router.get('/generate-fake-data', function(req, res, next) {
  for (var i = 0; i < 90; i++) {
    var product = new Product();

    product.category = faker.commerce.department();
    product.name = faker.commerce.productName();
    product.price = faker.commerce.price();
    product.cover = faker.image.image();

    product.save(function(err) {
      if (err) throw err;
    });
  }
  res.redirect('/add-product');
});

router.get('/products/:page', function(req, res, next) {
  const perPage = 9;
  const page = req.params.page || 1;

  Product.find({})
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec(function(err, products) {
      Product.count().exec(function(err, count) {
        if (err) return next(err);
        res.render('main/products', {
          products: products,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});

router.get('/qr/:id.png', function(req, res, next) {
  var code = qr.image(randomstring.generate(), { type: 'png', size: 15 });
  res.type('png');
  code.pipe(res);
});

module.exports = router;

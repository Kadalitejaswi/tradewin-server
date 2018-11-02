var express=require('express');
var router=express.Router() // constructor call
var productCtrl=require('../controllers/product.controller');

router.route('/products').get(productCtrl.getAllproducts)

router.route('/products/new').post(productCtrl.addOneProduct)


router.route('/products/:productId').get(productCtrl.getOneproducts)






module.exports=router;

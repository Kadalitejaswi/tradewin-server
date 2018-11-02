var productData = require('../models/data/productdetails.json')
var fs=require('fs')

module.exports.getAllproducts = function(req,res,next){
console.log(req.url);
console.log(req.query);
var offset =0
var count = 0
if(req.query && req.query.offset){
    offset= parseInt(req.query.offset,10)
}
if(req.query && req.query.count){
    count= parseInt(req.query.count,10)
}

 /**slicing JSON Array on Index value */
var products=productData.slice(offset,offset+count)

console.log(products.length);
    
        res.status(200).set('Content-Type','application/json')
        .json(productData)

}
module.exports.getOneproducts=function(req,res,next){
        var productId= req.params.productId;
        if(req.params.productId){
            if(productData.length>productId){
                product=productData[parseInt(productId,10)]

                res.status(200).set('Content-Type','application/json')
                .json(product)
               }else{
                res
               .status(404)
               .set('Content-Type','application/json')
               .json({
                error:"Not Found",
                message:'product Id not found'
            })}

        }else{
            res
            .status(404)
            .set('Content-Type','application/json')
            .json({
                error:"Not Found",
                message:'product Id not found'
            })  
        }
    }

    module.exports.addOneProduct = function(req,res,next){

            console.log("Add one product");
            
            console.log(req.body);
            if(req.body){
                fs.appendFile('./addedProduct.json',
                JSON.stringify(req.body),function(error){
                    if(err) throw err;
                    console.log("product is added");
                    

                })
         

            
            res
            .status(200)
            .set('Content-Type','application/json')
            .json(req.body)  
            
        }else{
            res
            .status(404)
            .set('Content-Type','application/json')
            .json('message:not found')  
    }
}
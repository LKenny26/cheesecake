// @author LeeAhnna Kenny 
const express = require('express');
const router = express.Router();
var one ={ topping:"Cherry", quantity:"12" };
var two= { topping:"Chocolate", quantity:"2" };
var three= { topping:"Plain", quantity:"7" };

//add the data 
var Jan = [];
Jan.push(one);
Jan.push(two);
Jan.push(three);



router.post('/', function(req, res, next) {
    
    res.json({data:Jan});
});

module.exports = router;
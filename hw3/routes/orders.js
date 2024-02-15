// @author LeeAhnna Kenny 
const express = require('express');
const router = express.Router();


const ordersData = {
    //array of all of the months orders, quantity and topping are here 
    Jan: [{ topping:"Cherry", quantity:"11" },{ topping:"Chocolate", quantity:"17" },{ topping:"Plain", quantity:"31" }],
    Feb: [{ topping:"Cherry", quantity:"8" },{ topping:"Chocolate", quantity:"6" },{ topping:"Plain", quantity:"3" }],
    Mar: [{ topping:"Cherry", quantity:"2" },{ topping:"Chocolate", quantity:"4" },{ topping:"Plain", quantity:"8" }],
    Apr: [{ topping:"Cherry", quantity:"5" },{ topping:"Chocolate", quantity:"0" },{ topping:"Plain", quantity:"9" }],
    May: [{ topping:"Cherry", quantity:"0" },{ topping:"Chocolate", quantity:"3" },{ topping:"Plain", quantity:"11" }],
    Jun: [{ topping:"Cherry", quantity:"3" },{ topping:"Chocolate", quantity:"10" },{ topping:"Plain", quantity:"12" }],
    Jul: [{ topping:"Cherry", quantity:"1" },{ topping:"Chocolate", quantity:"3" },{ topping:"Plain", quantity:"6" }],
    Aug: [{ topping:"Cherry", quantity:"8" },{ topping:"Chocolate", quantity:"16" },{ topping:"Plain", quantity:"19" }],
    Sep: [{ topping:"Cherry", quantity:"6" },{ topping:"Chocolate", quantity:"3" },{ topping:"Plain", quantity:"9" }],
    Oct: [{ topping:"Cherry", quantity:"4" },{ topping:"Chocolate", quantity:"9" },{ topping:"Plain", quantity:"4" }],
    Nov: [{ topping:"Cherry", quantity:"7" },{ topping:"Chocolate", quantity:"7" },{ topping:"Plain", quantity:"5" }],
    Dec: [{ topping:"Cherry", quantity:"9" },{ topping:"Chocolate", quantity:"8" },{ topping:"Plain", quantity:"1" }]
}



router.post('/', (req, res) => {
    //make a month variable that takes on what is passed through
    const { month } = req.body;
    //take the month and find it in the orders array
    const monthData = ordersData[month] || [];
    //pass the month's data as a JSON
    res.json(monthData);
});

module.exports = router;
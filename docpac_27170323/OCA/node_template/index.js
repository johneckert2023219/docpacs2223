// Import libraries
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// Configure expressJS
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

var orders = []

//Set constants
const retailMarkup = 0.40;
const salesTax = 0.06;

// Classes for easy input (make everything scaleable!)
class Item {
  constructor(name, itemUnitPrice, qty) {
    this.name = name;
    this.unit = itemUnitPrice;
    this.retail = this.unit * (1 + retailMarkup);
    this.profit = this.retail - this.unit;
    this.qty = qty;
    this.subtotal = this.retail * this.qty;
    this.salesTax = this.subtotal * salesTax;
  }
}

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/neworder', (req, res) => {
  let neworder = {
    customerName: req.body.customerName,
    customerAddress: req.body.customerAddress,
    orderDate: new Date(),
    items: []
  }
  neworder.profit = 0;
  neworder.subtotal = 0;
  neworder.shipping = 0;
  neworder.salesTax = 0;
  neworder.shipping = 0;
  neworder.total = 0;

  neworder.items.push(new Item("Lucy Nelson's Greatest Hits", 9.99, Number(req.body.item1)));
  neworder.items.push(new Item("Barry Cuda & The Sharks LIVE", 26.99, Number(req.body.item2)));
  neworder.items.push(new Item("Busta Moves Boogie", 29.99, Number(req.body.item3)));

  for (var item of neworder.items) {
    neworder.subtotal += item.subtotal;
    neworder.salesTax += item.salesTax;
    neworder.profit += item.profit;
  }

  // calculate shipping
  if (neworder.subtotal < 40) neworder.shipping = 15;
  else if (neworder.subtotal < 150) neworder.shipping = 10;


  // I don't know how to round to the nearest penny
  neworder.profit   = neworder.profit;
  neworder.subtotal = neworder.subtotal;
  neworder.shipping = neworder.shipping;
  neworder.salesTax = neworder.salesTax;
  neworder.shipping = neworder.shipping;

  neworder.total = neworder.subtotal + neworder.shipping + neworder.salesTax + neworder.shipping

  orders.push(neworder);

  res.redirect('/report');
});

app.get('/report', (req, res) => {
  res.render('report', {
    orders: orders
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
})

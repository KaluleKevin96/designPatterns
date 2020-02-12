//import the classes
const Laptop = require('./models/Laptop');
const Speaker = require('./models/Speaker');
const Bag = require('./models/Bag');
const LaptopAdaptor = require('./models/LaptopAdaptor');

const Cart = require('./models/Cart');
//const CartItem = require('./models/CartItem');

//let jbl = new Speaker(4, "JBL", "Black", 350000)

//console.log(jbl.printableString());

var newCart = new Cart("David", "Gayaza", "Cash", "pending");
var laptop1 = new Laptop("500GB", "8GB", "2.0 GHz", "6 hours", 15.6, "HP", 1000000, "Windows", 2019);
var laptop2 = new Laptop("1000GB", "16GB", "2.3 GHz", "7 hours", 15.6, "DELL", 2000000, "Windows", 2010);

var cartItem1 = new LaptopAdaptor(laptop1 , 2);
var cartItem2 = new LaptopAdaptor(laptop2 , 1);

newCart.addCartItem(cartItem1);
newCart.addCartItem(cartItem2);

console.log(newCart.printableString());
//import the classes
const Laptop = require('./models/Laptop');
const Speaker = require('./models/Speaker');
const Bag = require('./models/Bag');

let jbl = new Speaker(4, "JBL", "Black", 350000)

console.log(jbl.printableString());
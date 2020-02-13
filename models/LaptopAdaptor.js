//ADAPTOR to be a go between between a Laptop (item on the shelf) and cart item (an item in the cart)
const CartItem = require('./CartItem');

class LaptopAdaptor extends CartItem {

    constructor(Laptop , quantity) {
        super();
        this.Laptop = Laptop;
        this.quantity = quantity;
    }

    //override the unit price method with the unit price calculation from the laptop
    getUnitPrice() {

        return this.Laptop.adjPrice();
    }

    //override the description method with the description method from the laptop
    getDescription() {

        return this.Laptop.getDescription();
    }
}

module.exports = LaptopAdaptor;
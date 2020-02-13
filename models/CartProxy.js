//PROXY to help extend or increase the functionality of the Cart class in order to include the functionality to check if the unit price is higher than the min price and added into the cart based on the results of the condition
const Cart = require('./Cart.js');

class CartProxy extends Cart {

    constructor(name, address, paymentMethod, status, minimumPrice) {
        super(name, address, paymentMethod, status);
        this.minimumPrice = minimumPrice;
    }

    addCartItem(item) {
        if (item.getUnitPrice() >= this.minimumPrice) super.addCartItem(item);
    }
}

module.exports = CartProxy;
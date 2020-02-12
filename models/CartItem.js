class CartItem {

    constructor(description, quantity, unitPrice) {
        this.description = description
        this.quantity = quantity
        this.unitPrice = unitPrice
    }

    getTotal() {

        return this.getUnitPrice() * this.quantity;
    }

    //item "object" printing information about itself
    printableString() {
        return `Item Properties : \n QUANTITY : ${this.quantity} \n UNIT PRICE : ${this.getUnitPrice()} \n DESCRIPTION : ${this.getDescription()} \n TOTAL PRICE : ${this.getTotal()}`
    }

    //the method to get the unit price of an item --- which shall later be overriden by the laptop adaptor to get the price of the laptop object passed
    getUnitPrice() {
        return this.unitPrice;
    }

    //the method to get the description of an item --- which shall later be overriden by the laptop adaptor to get the price of the laptop object passed
    getDescription() {
        return this.description;
    }
}

module.exports = CartItem;
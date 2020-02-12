class Cart {
    constructor(name, address, paymentMethod, status) {
        this.name = name
        this.address = address
        this.paymentMethod = paymentMethod
        this.status = status
        this.items = []
    }

    addCartItem(item) {
        this.items.push(item)
    }

    //function to print info about one particular item
    itemPrintableString(item) {

        return item.printableString();
    }

    printableString() {

        return this.items.map(this.itemPrintableString).join("\n");
    }
}

module.exports = Cart;
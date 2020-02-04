class Bag {
    constructor(givenPrice , givenColor) {

        this.price = givenPrice;
        this.color = givenColor;
    }

    printableString() {

        return `Bag Properties : \n COLOR : ${this.color} \n PRICE : ${this.price}`
    }
}
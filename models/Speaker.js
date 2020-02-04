class Speaker {

    constructor(givenNumberOfSpeakers , givenbrand , givenColor , givenPrice) {

        this.numberOfSpeakers = givenNumberOfSpeakers;
        this.brand = givenbrand;
        this.color = givenColor;
        this.price = givenPrice;
    }

    printableString() {

        return `Speaker Properties : \n COLOR : ${this.color} \n PRICE : ${this.price} \n NUMBER OF SPEAKERS : ${this.numberOfSpeakers}`
    }
}

module.exports = Speaker;
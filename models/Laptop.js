class Laptop {

    constructor(hardDiskSize, ram, cpuSpeed, batteryLife, screenSize, model, price, os, yearOfManufacture) {

        this.hardDiskSize = hardDiskSize;
        this.ram = ram;
        this.cpuSpeed = cpuSpeed;
        this.batteryLife = batteryLife;
        this.screenSize = screenSize;
        this.model = model;
        this.price = price;
        this.os = os;
        this.yearOfManufacture = yearOfManufacture;
        this.currentYear = new Date().getFullYear();
    }

    calculateLaptopAge() {
        return (this.currentYear - this.yearOfManufacture)
    }

    adjPrice() {
        var discount = 0;

        if (this.calculateLaptopAge() > 3) {

            discount = (0.3 * this.price)
        }

        return (this.price - discount)
    }

    printableString() {

        return `Laptop Properties : \n HDD : ${this.hardDiskSize} \n RAM : ${this.ram} \n CPU SPEED : ${this.cpuSpeed} \n MODEL : ${this.model} \n OS : ${this.os} \n BATTERY LIFE : ${this.batteryLife} \n SCREEN SIZE : ${this.screenSize} \n DATE OF MANUFACTURE : ${this.yearOfManufacture} \n PRICE : ${this.price}`
    }

    getDescription() {
        return `${this.model} ${this.ram} ${this.hardDiskSize} HDD`
    }

}

module.exports = Laptop;
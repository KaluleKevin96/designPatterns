class Laptop {

    constructor(hardDiskSize , ram , cpuSpeed , batteryLife , screenSize , model , price , os , serialNumber) {

        this.hardDiskSize = hardDiskSize;
        this.ram = ram;
        this.cpuSpeed = cpuSpeed;
        this.batteryLife = batteryLife;
        this.screenSize = screenSize;
        this.model = model;
        this.price = price;
        this.os = os;
        this.serialNumber = serialNumber;
    }

    printableString() {

        return `Laptop Properties : \n HDD : ${this.hardDiskSize} \n RAM : ${this.ram} \n CPU SPEED : ${this.cpuSpeed} \n MODEL : ${this.model} \n OS : ${this.os} \n BATTERY LIFE : ${this.batteryLife} \n SCREEN SIZE : ${this.screenSize} \n SERIAL NUMBER : ${this.serialNumber} \n PRICE : ${this.price}`
    }


}

module.exports = Laptop;
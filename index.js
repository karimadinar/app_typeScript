// Step 2: Create the Car class implementing Vehicle
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Step 3: Create a Car instance and test it
var myCar = new Car("Toyota", "Corolla", 2022);
console.log("Car: ".concat(myCar.make, " ").concat(myCar.model, ", Year: ").concat(myCar.year));
myCar.start();

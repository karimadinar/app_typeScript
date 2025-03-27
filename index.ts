// Step 1: Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Step 2: Create the Car class implementing Vehicle
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Step 3: Create a Car instance and test it
  const myCar = new Car("Toyota", "Corolla", 2022);
  console.log(`Car: ${myCar.make} ${myCar.model}, Year: ${myCar.year}`);
  myCar.start();
  
class Car {
  static className = "Carro";

  public readonly brand: string;
  public doors: number;
  public fuelTank: number;
  public isRunning: boolean;
  public type: string;

  private readonly createdAt: number;

  constructor(brand: string, type: string) {
    this.brand = brand;
    this.doors = 0;
    this.fuelTank = 0;
    this.isRunning = false;
    this.type = type;

    this.createdAt = 123456789;
  }

  turnOn() {
    if (this.isRunning) {
      console.log("El carro ya estaba encendido... se daño el motor");
      return;
    }

    if (this.fuelTank <= 0) {
      console.log("El carro no tiene gasolina");
      return;
    }

    this.isRunning = true;
    console.log("El carro está encendido");
  }

  fillTank(gas: number) {
    if (gas <= 0) {
      console.log("El gas tiene que ser positivo");
      return;
    }

    let mewFuelTank = this.fuelTank + gas;

    if (mewFuelTank >= 100) {
      mewFuelTank = 100;
    }

    this.fuelTank = mewFuelTank;
  }
}

let myMazda = new Car("Mazda", "Sedan");
// myMazda.brand = "Mazda";
// myMazda.type = "Sedan";
// console.log(myMazda.createdAt);

console.log(myMazda);
myMazda.fillTank(20);
myMazda.fillTank(50);
myMazda.turnOn();
console.log(myMazda);

console.log(Car.className);

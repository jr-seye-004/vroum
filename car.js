var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Le moteur de la voiture a démarré");
    };
    return Car;
}());
// Créer une instance de la classe Car
var myCar = new Car("Toyota", "Corolla", 2023);
// Appeler la méthode start
myCar.start();

class Cars implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Le moteur de la voiture a démarré");
    }
}

// Créer une instance de la classe Car
const myCars = new Car("Toyota", "Corolla", 2023);

// Appeler la méthode start
myCar.start();

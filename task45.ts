interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function carInfo(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
        manufacturer,
        model
    };

    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });

    return car;
}

const myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
console.log(myCar);

function solve(lines) {
    let cars = new Map();
    for (let line of lines) {
        let tokens = line.split(' | ').filter(a => a !== '');
        let carBrand = tokens[0];
        let carModel = tokens[1];
        let productedCars = Number(tokens[2]);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }

        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, productedCars);
        } else {
            cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + productedCars);
        }
    }

    let keys = Array.from(cars.keys());

    for (let key of keys) {
        console.log(key);
        let allCars = cars.get(key);

        for (let [k, v] of allCars) {
            console.log(`###${k} -> ${v}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);
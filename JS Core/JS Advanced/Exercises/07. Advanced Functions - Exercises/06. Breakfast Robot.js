let breakfastRobot = (function () {
    let ingredients = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    function restock(microelement, quantity) {
        ingredients[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let microelements = [...Object.keys(recipes[recipe])];
        let meal = recipes[recipe];
        for (let element of microelements) {
            if (meal[element] * quantity > ingredients[element]) {
                return `Error: not enough ${element} in stock`;
            }
        }
        for (let element of microelements)
            ingredients[element] -= meal[element] * quantity;
        return 'Success';
    }

    function report() {
        return Object.keys(ingredients)
            .map(key => `${key}=${ingredients[key]}`)
            .join(' ');
    }

    return function processing(instructions) {
        let [instruction, food, quantity] = instructions.split(' ');
        if (quantity)
            quantity = Number(quantity);
        switch (instruction) {
            case 'restock': return restock(food, quantity); break;
            case 'prepare': return prepare(food, quantity); break;
            case 'report':  return report(); break;
        }
    }
})();
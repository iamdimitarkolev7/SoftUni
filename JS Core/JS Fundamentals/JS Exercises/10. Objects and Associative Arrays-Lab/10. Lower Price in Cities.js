function solve(lines) {
    let lowerPrices = new Map();
    for (let line of lines) {
        let tokens = line.split(' | ').filter(a => a !== '');
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if (!(lowerPrices.has(product))) {
            lowerPrices.set(product, new Map());
        }

        lowerPrices.get(product).set(town,price);
    }

    for (let [product,towns] of lowerPrices) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';

        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
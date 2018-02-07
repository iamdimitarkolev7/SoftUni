function solve(lines) {
    let markets = new Map();

    for (let line of lines) {
        let tokens = line.split(' -> ');
        let town = tokens[0];
        let product = tokens[1];
        let amountAndPrice = tokens[2];
        let split = amountAndPrice.split(' : ');
        let amount = Number(split[0]);
        let price = Number(split[1]);
        let totalPrice = amount * price;
        let products = new Map();
        products.set(product, totalPrice);

        if (!(markets.has(town))) {
            markets.set(town, new Map());
        }

        if (markets.get(town).get(products)) {
            markets.get(town).set(product, markets.get(town).get(product) + totalPrice);
        } else {
            markets.get(town).set(product, totalPrice);
        }
    }

    for (let [key, value] of markets) {
        console.log(`Town - ${key}`);
        for (let [k, v] of value) {
            console.log(`$$$${k} : ${v}`);
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
]);
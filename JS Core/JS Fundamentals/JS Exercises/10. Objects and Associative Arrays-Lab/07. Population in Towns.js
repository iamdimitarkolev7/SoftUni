function solve(input) {
    // solution using Map
    let towns = new Map();
    for (let str of input) {
        let tokens = str.split(' <-> ');
        let townName = tokens[0];
        let townPopulation = Number(tokens[1]);

        if (!(towns.has(townName))) {
            towns.set(townName, townPopulation);
        } else {
            towns.set(townName, towns.get(townName) + townPopulation);
        }
    }

    for (let [key, value] of towns) {
        console.log(`${key} : ${value}`);
    }

    // solution using Object
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Sofia <-> 1000000']);

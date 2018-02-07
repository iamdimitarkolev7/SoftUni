function solve(lines) {
    let catalogue=new Map();

    for (let line of lines) {
        let [product,price]=line.split(' : ');
        let firstLetter=line[0];

        if(!catalogue.has(firstLetter)){
            catalogue.set(firstLetter,[])
        }

        catalogue.get(firstLetter).push({title:product,value:price});
    }

    let keys=Array.from(catalogue.keys()).sort();

    for (let key of keys) {
        console.log(key);
        let sortedProducts=catalogue.get(key).sort(sortAlphabetically);

        for (let product of sortedProducts) {
            console.log(`  ${product.title}: ${product.value}`)
        }
    }

    function sortAlphabetically(a, b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
}
    solve([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]);
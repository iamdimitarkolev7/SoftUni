function solve(lines) {
    let juices = new Map();
    let result = new Map();

    for (let line of lines) {
        let tokens = line.split(' => ')
            .filter(a => a !== '');
        let juiceName = tokens[0];
        let quantity = tokens[1];

        if (!(juices.has(juiceName))) {
            juices.set(juiceName, 0);
        }

        juices.set(juiceName, juices.get(juiceName) + Number(quantity));

        while(juices.get(juiceName) >= 1000){
            if(!result.has(juiceName)){
                result.set(juiceName,0)
            }

            juices.set(juiceName,juices.get(juiceName) - 1000);
            result.set(juiceName,result.get(juiceName) + 1);
        }
    }

    for (let [k,v] of result) {
        console.log(`${k} => ${v}`)
    }
}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
    'Strawberry => 20']);
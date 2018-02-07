function solve(lines) {
    let result = [];
    for (let line of lines) {
        let tokens = line.split(' / ').filter(a => a !== '');
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let items = [];
        try {
            items = tokens[2].split(', ').filter(a => a !== '');
        } catch(err) {

        }

        let obj = {};

        obj = {
            name: heroName,
            level: heroLevel,
            items: items
        };
        result.push(obj);

    }

    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
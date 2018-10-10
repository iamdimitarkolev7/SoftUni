function solve(input) {
    let regex1 = /[A-Za-z]+ -> [A-Za-z]+ -> [0-9]+/g;
    let regex2 = /[A-Za-z]+ vs [A-Za-z]+/g;
    let gladiatorPool = new Map();

    for (let line of input) {
        if (line.match(regex1)) {
            let tokens = line.split(' -> ').filter(a => a !== '');
            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);

            if(!gladiatorPool.has(gladiator)) {
                gladiatorPool.set(gladiator, new Map());
            }
            if(!gladiatorPool.get(gladiator).has(technique)) {
                gladiatorPool.get(gladiator).set(technique, skill);
            } else {
                if (skill > gladiatorPool.get(gladiator).get(technique)) {
                    gladiatorPool.get(gladiator).set(technique, skill);
                }
            }
        } else if (line.match(regex2)) {
            let tokens = line.split(' vs ').filter(a => a !== '');
            let gladiator1 = tokens[0];
            let gladiator2 = tokens[1];

            if (gladiatorPool.has(gladiator1) && gladiatorPool.has(gladiator2)) {
                let gladiator1TotalSkill = 0;
                let gladiator2TotalSkill = 0;
                let techniquesOfG1 = [];
                let techniquesOfG2 = [];
                let count = 0;

                for (let [key, value] of gladiatorPool.get(gladiator1)) {
                    techniquesOfG1.push(key);
                    gladiator1TotalSkill += value;
                }

                for (let [key, value] of (gladiatorPool.get(gladiator2))) {
                    techniquesOfG2.push(key);
                    gladiator2TotalSkill += value;
                }

                for (let i = 0; i < techniquesOfG1.length; i++) {
                    for (let j = 0; j < techniquesOfG2.length; j++) {
                        if (techniquesOfG1[i] === techniquesOfG2[j]) {
                            count++;
                        }
                    }
                }

                if (count > 0) {
                    if (gladiator1TotalSkill > gladiator2TotalSkill) {
                        gladiatorPool.delete(gladiator2);
                    } else if (gladiator1TotalSkill < gladiator2TotalSkill) {
                        gladiatorPool.delete(gladiator1);
                    }
                }
            }

        } else if (line === 'Ave Cesar') {
            let sortedGladiators = [...gladiatorPool.keys()].sort(function (x, y) {
                return x.localeCompare(y);
            }).sort((x, y) => {
                let xTotalSkill = 0;
                let yTotalSkill = 0;

                for (let [k, v] of gladiatorPool.get(x)) {
                    xTotalSkill += v;
                }
                for (let [k, v] of gladiatorPool.get(y)) {
                    yTotalSkill += v;
                }

                if (xTotalSkill < yTotalSkill) {return 1}
                if (xTotalSkill > yTotalSkill) {return -1}

                return 0;
            });

            for (let gladiator of sortedGladiators) {
                let totalSkill = 0;
                for (let [k, v] of gladiatorPool.get(gladiator)) {
                    totalSkill += v;
                }
                console.log(gladiator + `: ${totalSkill} skill`);
                let sortedInnerMap = [...gladiatorPool.get(gladiator).keys()].sort((x, y) => {
                    return x.localeCompare(y);
                }).sort((x, y) => {
                    let skillX = gladiatorPool.get(gladiator).get(x);
                    let skillY = gladiatorPool.get(gladiator).get(y);

                    if (skillX < skillY) { return 1}
                    if (skillY > skillX) { return -1}

                    return 0;
                });

                for (let key of sortedInnerMap) {
                    console.log(`- ${key} <!> ${gladiatorPool.get(gladiator).get(key)}`);
                }
            }

            return;
        }
    }
}

solve(['Pesho -> Duck -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Henry -> 250',
    'Ave Cesar'
]);
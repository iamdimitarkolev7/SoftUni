function solve(kingdoms, battles) {
    let kingdomsArmy = new Map();

    for (let obj of kingdoms) {
        let kingdom = obj.kingdom;
        let general = obj.general;
        let army = Number(obj.army);

        if (!kingdomsArmy.has(kingdom)) {
            kingdomsArmy.set(kingdom, new Map());
        }
        if (!kingdomsArmy.get(kingdom).has(general)) {
            kingdomsArmy.get(kingdom).set(general, {army: 0, wins: 0, looses: 0});
        }

        kingdomsArmy.get(kingdom).get(general).army += army;
    }

    for (let battle of battles) {
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];

        if (attackingKingdom !== defendingKingdom) {
            if (kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army > kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army) {
                kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army = Math.floor(kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army + (kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army) * 0.1);
                kingdomsArmy.get(attackingKingdom).get(attackingGeneral).wins += 1;

                kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army = Math.floor(kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army - (kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army) * 0.1);
                kingdomsArmy.get(defendingKingdom).get(defendingGeneral).looses += 1;
            } else if (kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army < kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army) {
                kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army = Math.floor(kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army - (kingdomsArmy.get(attackingKingdom).get(attackingGeneral).army) * 0.1);
                kingdomsArmy.get(attackingKingdom).get(attackingGeneral).looses += 1;

                kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army = Math.floor(kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army + (kingdomsArmy.get(defendingKingdom).get(defendingGeneral).army) * 0.1);
                kingdomsArmy.get(defendingKingdom).get(defendingGeneral).wins += 1;
            }
        }
    }

    let sortedKingdoms = [...kingdomsArmy.keys()].sort((x, y) => {
        return x.localeCompare(y);
    }).sort((x, y) => {
        let xLooses = 0;
        let yLooses = 0;

        for (let [general, obj] of kingdomsArmy.get(x)) {
            xLooses = obj.looses;
        }
        for (let [general, obj] of kingdomsArmy.get(y)) {
            yLooses = obj.looses;
        }

        if (xLooses > yLooses) {return 1}
        if (xLooses < yLooses) {return -1}
        return 0;
    }).sort((x, y) => {
        let xWins = 0;
        let yWins = 0;

        for (let [general, obj] of kingdomsArmy.get(x)) {
            xWins = obj.wins;
        }
        for (let [general, obj] of kingdomsArmy.get(y)) {
            yWins = obj.wins;
        }

        if (xWins < yWins) {return 1}
        if (xWins > yWins) {return -1}
        return 0;
    });

    let sortedGenerals = [...(kingdomsArmy.get(sortedKingdoms[0]).keys())].sort((x, y) => {
        if(kingdomsArmy.get(sortedKingdoms[0]).get(x).army>kingdomsArmy.get(sortedKingdoms[0]).get(y).army) return -1;
        if(kingdomsArmy.get(sortedKingdoms[0]).get(x).army<kingdomsArmy.get(sortedKingdoms[0]).get(y).army) return 1;

        return 0;
    });

    console.log(`Winner: ${sortedKingdoms[0]}`);
    for (let general of sortedGenerals) {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${kingdomsArmy.get(sortedKingdoms[0]).get(general).army}`);
        console.log(`---wins: ${kingdomsArmy.get(sortedKingdoms[0]).get(general).wins}`);
        console.log(`---losses: ${kingdomsArmy.get(sortedKingdoms[0]).get(general).looses}`);
    }
}

solve(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);
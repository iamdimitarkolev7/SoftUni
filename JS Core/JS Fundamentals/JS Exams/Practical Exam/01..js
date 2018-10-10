function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let shieldBrokeCount = 0;
    let expenses = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 || i % 3 === 0) {
            if (i % 2 === 0 && i % 3 === 0) {
                expenses += shieldPrice;
                shieldBrokeCount++;
                if (shieldBrokeCount % 2 === 0) {
                    expenses += armorPrice;
                }
            }
            if (i % 2 === 0) {
                expenses += helmetPrice;
            }
            if (i % 3 === 0) {
                expenses += swordPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5);
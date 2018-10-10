function solve(arr) {
    const oneBitcoin = 11949.16;
    const oneGold = 67.51;

    let numOfBitcoins = 0;
    let totalGold = 0;
    let day = 0;
    let isTrue = true;
    let isBought = false;

    for (let i = 0; i < arr.length; i++) {
        let amount = Number(arr[i]);

        if ((i + 1) % 3 === 0) {
            amount = amount - amount * (3 / 10);
        }

        totalGold += amount * oneGold;

        while(totalGold > oneBitcoin) {
            if (isTrue) {
                if (totalGold > oneBitcoin) {
                    isTrue = false;
                    day = i;
                    isBought = true;
                }
            }

            numOfBitcoins++;
            totalGold -= oneBitcoin;
        }
    }

    console.log("Bought bitcoins: " + numOfBitcoins);
    if (isBought) {
        console.log("Day of the first purchased bitcoin: " + (day + 1));
    }

    console.log(`Left money: ${totalGold.toFixed(2)} lv.`);
}

solve(['3124.15',
    '504.212',
    '2511.124']);
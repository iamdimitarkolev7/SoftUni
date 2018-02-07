function solve(input) {
    let products = [];
    let totalSum = 0;

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            products.push(input[i]);
        } else {
            totalSum += Number(input[i]);
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${totalSum}`);
}
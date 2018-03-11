function solve(numbers) {
    console.log("Sum: " + numbers.map(Number).reduce((a, b) => {
        return a + b;
    }));
    console.log("Min: " + numbers.map(Number).reduce((a, b) => {
        return Math.min(a, b);
    }));
    console.log("Max: " + numbers.map(Number).reduce((a, b) => {
        return Math.max(a, b);
    }));
    console.log("Product: " + numbers.map(Number).reduce((a, b) => {
        return a * b;
    }));
    console.log("Join: " + numbers.map(Number).join(''));
}

solve(['1', '2', '10', '3']);
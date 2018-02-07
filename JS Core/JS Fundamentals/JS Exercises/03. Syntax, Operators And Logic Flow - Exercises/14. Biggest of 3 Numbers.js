function solve([num1, num2, num3]) {
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    let max = Math.max(num1, num2, num3);
    console.log(max);
}

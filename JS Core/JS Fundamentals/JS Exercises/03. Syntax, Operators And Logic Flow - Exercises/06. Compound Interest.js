function solve([principalSum, interestRate, compoundingPeriod, timeSpan]) {
    interestRate /= 100;
    compoundingPeriod = 12 / compoundingPeriod;
    let result = principalSum * Math.pow((1 + (interestRate / compoundingPeriod)), (timeSpan * compoundingPeriod));
    console.log(result.toFixed(2));
}
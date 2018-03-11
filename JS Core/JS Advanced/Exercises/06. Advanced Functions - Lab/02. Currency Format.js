function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) console.log(symbol + ' ' + result);
    else console.log(result + ' ' + symbol);
}

currencyFormatter(',', '$', true, 12344);
let dollarFormatter = solve(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71


function solve(func) {
    return function(value) {
        return func(',', '$', true, value);
    }
}

function solve([number, precision]) {
    let insignificantNumRemoval = 10 ** Number(precision);
    let result = Math.round(Number(number) * insignificantNumRemoval) / insignificantNumRemoval;

    console.log(result);
}

/*function solve([number, precision]) {
    let result = Number(number).toFixed(Number(precision));
    let result1 = result.toString();

    let i = result1.length;
    let dotIndex = result1.lastIndexOf('.');

    while (i > dotIndex) {
        if (result1.indexOf(i) === '0') {
            result1 = result1.replace(result1.indexOf(i), '');
        } else {
            break;
        }
    }

    result = Number(result1);

    console.log(result);
}*/
function solve(array) {
    /*let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            let num = array[i] * 2;
            result.push(num);
        }
    }
    result.reverse();
    console.log(result.join(' '));*/

    let result = array.filter(i => i % 2 !== 0)
        .map(x => 2 * x)
        .reverse();

    console.log(result.join(' '));
}

solve([10, 15, 20, 25]);

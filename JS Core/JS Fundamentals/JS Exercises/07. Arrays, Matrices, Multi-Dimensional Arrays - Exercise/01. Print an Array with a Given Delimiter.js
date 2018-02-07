function solve(input = []) {
    let delimiter = input[input.length - 1];
    let result = '';

    for (let i = 0; i < input.length - 2; i++) {
        result += input[i] + delimiter;
    }
    result += input[input.length - 2];

    console.log(result);

    /*
    let delimiter = input[input.length - 1];
    input.pop();
    console.log(input.join(delimiter));
     */
}
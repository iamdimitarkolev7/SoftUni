function solve(input) {
    let regex = /[(' .,;\\/\(\))]+/;
    input = input.split(regex);
    let result = [];

    for (let i = 0; i < input.length; i++) {
        result.push(input[i]);
    }

    console.log(result.join('\n'));
}

solve('\'let sum = 4 * 4,b = "wow";\'');
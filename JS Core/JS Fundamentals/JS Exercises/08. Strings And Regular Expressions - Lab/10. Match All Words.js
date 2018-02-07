function solve(input) {
    /*input = input.split(/\W+/);
    console.log(input.filter(s => s !== '').join('|'));*/

    let regex = /\w+/;
    let result = [];
    input = input.split(/\W+/);
    for (let i = 0; i < input.length; i++) {
        if (input[i].match(regex)) {
            result.push(input[i]);
        }
    }

    console.log(result.join('|'));
}

solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
solve('_(Underscores) are also word characters');
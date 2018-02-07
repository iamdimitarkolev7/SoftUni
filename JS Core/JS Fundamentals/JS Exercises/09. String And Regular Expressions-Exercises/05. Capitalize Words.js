function solve(input) {
    let result = [];
    if (input[0] >= 'A' && input[0] <= 'Z') {
        result.push(input[0]);
    } else {
        result.push (input[0].toUpperCase());
    }
    for (let el = 1; el < input.length; el++) {
        if (input[el - 1] === ' ' && input[el] >= 'a' && input[el] <= 'z' ) {
             result.push(input[el].toUpperCase());
        } else if ((input[el - 1] === ' ') && (input[el] >= 'A' && input[el] <= 'Z' )){
            result.push(input[el]);
        } else {
            result.push(input[el].toLowerCase());
        }
    }

    console.log(result.join(''));
}

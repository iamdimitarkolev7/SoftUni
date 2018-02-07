function solve(input) {
    let step = input[input.length - 1];
    input.pop();

    for (let i = 0; i < input.length; i += Number(step)) {
        console.log(input[i]);
    }
}

solve([5, 20, 31, 4, 20, 2]);